#!/usr/bin/env python3
"""Save same-origin images and fonts referenced by the captured frontend."""

from __future__ import annotations

import hashlib
import json
import re
from concurrent.futures import ThreadPoolExecutor
from datetime import datetime, timezone
from pathlib import Path

from download_public_assets import ORIGIN, PUBLIC, ROOT, fetch

MEDIA_RE = re.compile(
    r"/(?:[A-Za-z0-9_-]+/)*[A-Za-z0-9_.-]+"
    r"\.(?:webp|png|jpe?g|svg|avif|gif|ico|woff2?)",
    re.IGNORECASE,
)


def main() -> int:
    references: set[str] = set()
    for source in PUBLIC.rglob("*"):
        if source.is_file() and source.suffix in {".html", ".js", ".css"}:
            references.update(MEDIA_RE.findall(source.read_text(errors="replace")))
    references = {
        path for path in references
        if not any(other != path and other.endswith(path) for other in references)
    }

    files: list[dict[str, object]] = []
    errors: list[dict[str, str]] = []

    def download(path: str) -> tuple[str, bytes, str]:
        body, content_type = fetch(path)
        if not any(kind in content_type.lower() for kind in ("image/", "font/", "octet-stream")):
            raise ValueError(f"Expected media, got {content_type}")
        return path, body, content_type

    previous_path = ROOT / "media-manifest.json"
    previous = {}
    if previous_path.exists():
        previous = {item["path"]: item for item in json.loads(previous_path.read_text())["files"]}
    missing = []
    for path in sorted(references):
        destination = PUBLIC / path.lstrip("/")
        old = previous.get(str(destination.relative_to(ROOT)))
        if old and destination.is_file() and hashlib.sha256(destination.read_bytes()).hexdigest() == old["sha256"]:
            files.append(old)
        else:
            missing.append(path)

    with ThreadPoolExecutor(max_workers=3) as executor:
        futures = {executor.submit(download, path): path for path in missing}
        for future, path in futures.items():
            try:
                _, body, content_type = future.result()
                destination = PUBLIC / path.lstrip("/")
                destination.parent.mkdir(parents=True, exist_ok=True)
                destination.write_bytes(body)
                files.append(
                    {
                        "path": str(destination.relative_to(ROOT)),
                        "url": ORIGIN + path,
                        "bytes": len(body),
                        "sha256": hashlib.sha256(body).hexdigest(),
                        "content_type": content_type,
                    }
                )
            except Exception as error:
                errors.append({"url": ORIGIN + path, "error": str(error)})

    manifest = {
        "origin": ORIGIN,
        "captured_at": datetime.now(timezone.utc).isoformat(),
        "referenced_media": len(references),
        "files": files,
        "errors": errors,
    }
    (ROOT / "media-manifest.json").write_text(json.dumps(manifest, indent=2) + "\n")
    print(f"Saved {len(files)} media files; {len(errors)} errors", flush=True)
    return 0 if not errors else 1


if __name__ == "__main__":
    raise SystemExit(main())
