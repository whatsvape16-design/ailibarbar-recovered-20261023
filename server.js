import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { resolve, relative, extname } from "node:path";
import { fileURLToPath } from "node:url";
import { handleApi } from "./backend.js";

const root = resolve(fileURLToPath(new URL("./public/", import.meta.url)));
const adminRoot = resolve(fileURLToPath(new URL("./admin-dist/", import.meta.url)));
const host = process.env.HOST || "127.0.0.1";
const port = Number(process.env.PORT || 4173);

const mime = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".avif": "image/avif",
  ".gif": "image/gif",
  ".ico": "image/x-icon",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
};

const pages = new Map([
  ["/", "index.html"],
  ["/guides", "guides/index.html"],
  ["/ingot-9000", "ingot-9000/index.html"],
]);

function send(response, status, body, contentType, method = "GET") {
  response.writeHead(status, {
    "Content-Type": contentType,
    "Content-Length": Buffer.byteLength(body),
    "Cache-Control": "no-store",
  });
  response.end(method === "HEAD" ? undefined : body);
}

createServer(async (request, response) => {
  const method = request.method || "GET";
  let pathname;
  let url;
  try {
    url = new URL(request.url || "/", "http://localhost");
    pathname = decodeURIComponent(url.pathname);
  } catch {
    send(response, 400, "Bad URL", "text/plain; charset=utf-8", method);
    return;
  }

  if (pathname.startsWith("/api/")) {
    await handleApi(request, response, url);
    return;
  }

  if (method !== "GET" && method !== "HEAD") {
    send(response, 405, "Method not allowed", "text/plain; charset=utf-8", method);
    return;
  }

  const route = pathname.replace(/\/$/, "") || "/";
  if (route === "/orders2589") {
    response.writeHead(302, { Location: "/orders2026/orders", "Cache-Control": "no-store" });
    response.end();
    return;
  }
  if (route === "/orders2026" || route.startsWith("/orders2026/") || route.startsWith('/admin-assets/')) {
    const target = route.startsWith('/admin-assets/') ? route.slice('/admin-assets/'.length) : 'index.html';
    const destination = resolve(adminRoot, target);
    const relation = relative(adminRoot, destination);
    if (relation.startsWith('..')) { send(response, 403, 'Forbidden', 'text/plain; charset=utf-8', method); return; }
    try {
      const content = await readFile(destination);
      send(response, 200, content, mime[extname(destination).toLowerCase()] || 'application/octet-stream', method);
    } catch {
      send(response, 503, 'Admin app has not been built. Run npm run build:admin.', 'text/plain; charset=utf-8', method);
    }
    return;
  }
  const target = pages.get(route) || pathname.replace(/^\/+/, "");
  const destination = resolve(root, target);
  const relation = relative(root, destination);
  if (relation.startsWith("..") || relation.includes(".." + "/")) {
    send(response, 403, "Forbidden", "text/plain; charset=utf-8", method);
    return;
  }

  try {
    if (!(await stat(destination)).isFile()) throw new Error("not a file");
    const body = await readFile(destination);
    send(response, 200, body, mime[extname(destination).toLowerCase()] || "application/octet-stream", method);
  } catch {
    if (!extname(route) && request.headers.accept?.includes("text/html")) {
      const body = await readFile(resolve(root, "index.html"));
      send(response, 200, body, mime[".html"], method);
    } else {
      send(response, 404, "Not found", "text/plain; charset=utf-8", method);
    }
  }
}).listen(port, host, () => {
  console.log(`Local frontend: http://${host}:${port}/`);
});
