#!/usr/bin/env python3
"""Save same-origin HTML, JavaScript and CSS publicly served by a site."""

from __future__ import annotations

import hashlib
import json
import re
import sys
import time
from concurrent.futures import ThreadPoolExecutor
from datetime import datetime, timezone
from pathlib import Path
from urllib.error import HTTPError, URLError
from urllib.parse import urljoin, urlparse
from urllib.request import Request, urlopen

ORIGIN = "https://www.ailibarbar.com"
ROOT = Path(__file__).resolve().parent
PUBLIC = ROOT / "public"
USER_AGENT = (
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) "
    "AppleWebKit/537.36 (KHTML, like Gecko) "
    "Chrome/132.0.0.0 Safari/537.36"
)
PAGES = {"/": "index.html", "/guides": "guides/index.html", "/ingot-9000": "ingot-9000/index.html"}
ASSET_RE = re.compile(r"(?:/|\./)?assets/([A-Za-z0-9_-]+-[A-Za-z0-9_-]{8}\.(?:js|css))")
RELATIVE_JS_RE = re.compile(r"\./([A-Za-z0-9_-]+-[A-Za-z0-9_-]{8}\.js)")


def fetch(path: str) -> tuple[bytes, str]:
    url = urljoin(ORIGIN + "/", path.lstrip("/"))
    request = Request(url, headers={"User-Agent": USER_AGENT, "Accept": "*/*"})
    last_error: Exception | None = None
    for attempt in range(3):
        try:
            with urlopen(request, timeout=25) as response:
                if urlparse(response.url).netloc != "www.ailibarbar.com":
                    raise ValueError(f"Unexpected redirect: {response.url}")
                return response.read(), response.headers.get("Content-Type", "")
        except (HTTPError, URLError, TimeoutError) as error:
            last_error = error
            if attempt < 2:
                time.sleep(attempt + 1)
    raise RuntimeError(f"Could not fetch {url}: {last_error}")


def save(path: str, body: bytes) -> dict[str, object]:
    destination = PUBLIC / path.lstrip("/")
    destination.parent.mkdir(parents=True, exist_ok=True)
    destination.write_bytes(body)
    return {
        "path": str(destination.relative_to(ROOT)),
        "url": urljoin(ORIGIN + "/", path.lstrip("/")),
        "bytes": len(body),
        "sha256": hashlib.sha256(body).hexdigest(),
    }


def references(body: bytes) -> set[str]:
    source = body.decode("utf-8", errors="replace")
    found = {"/assets/" + name for name in ASSET_RE.findall(source)}
    found.update("/assets/" + name for name in RELATIVE_JS_RE.findall(source))
    return found


def main() -> int:
    records: list[dict[str, object]] = []
    errors: list[dict[str, str]] = []
    pending: set[str] = set()
    for route, local_path in PAGES.items():
        try:
            body, content_type = fetch(route)
            if "html" not in content_type.lower():
                raise ValueError(f"Expected HTML, got {content_type}")
            record = save(local_path, body)
            record["url"] = urljoin(ORIGIN + "/", route.lstrip("/"))
            record["content_type"] = content_type
            records.append(record)
            pending.update(references(body))
        except Exception as error:
            errors.append({"route": route, "error": str(error)})

    seen: set[str] = set()
    while pending:
        batch = sorted(pending - seen)
        pending.clear()
        if not batch:
            break

        def fetch_asset(path: str) -> tuple[str, bytes, str]:
            body, content_type = fetch(path)
            if path.endswith(".js") and body.lstrip().startswith(b"<"):
                raise ValueError(f"Unexpected HTML for JavaScript: {path}")
            return path, body, content_type

        with ThreadPoolExecutor(max_workers=3) as executor:
            futures = {executor.submit(fetch_asset, path): path for path in batch}
            for future, path in futures.items():
                seen.add(path)
                try:
                    _, body, content_type = future.result()
                    record = save(path, body)
                    record["content_type"] = content_type
                    records.append(record)
                    if path.endswith(".js"):
                        pending.update(references(body) - seen)
                except Exception as error:
                    errors.append({"route": path, "error": str(error)})
        print(f"Downloaded {len(records)} files; {len(errors)} errors", flush=True)

    manifest = {
        "origin": ORIGIN,
        "captured_at": datetime.now(timezone.utc).isoformat(),
        "scope": "Same-origin public HTML, JavaScript and CSS referenced by three pages and the discovered JS bundles.",
        "files": sorted(records, key=lambda record: str(record["path"])),
        "errors": errors,
    }
    (ROOT / "manifest.json").write_text(json.dumps(manifest, ensure_ascii=False, indent=2) + "\n")
    print(f"Finished: {len(records)} files, {len(errors)} errors", flush=True)
    return 0 if not errors else 1


if __name__ == "__main__":
    sys.exit(main())
