import http from "node:http";
import { readFile, stat } from "node:fs/promises";
import { extname, join, resolve } from "node:path";

const root = resolve(process.argv.includes("--dist") ? "dist" : ".");
const port = Number(process.env.PORT || 4173);
const types = { ".html": "text/html; charset=utf-8", ".css": "text/css; charset=utf-8", ".js": "text/javascript; charset=utf-8", ".jpg": "image/jpeg", ".webp": "image/webp" };
const server = http.createServer(async (req, res) => {
  try {
    const url = new URL(req.url, `http://${req.headers.host}`);
    let file = join(root, decodeURIComponent(url.pathname === "/" ? "/index.html" : url.pathname));
    if (!file.startsWith(root)) throw new Error("unsafe path");
    if ((await stat(file)).isDirectory()) file = join(file, "index.html");
    const body = await readFile(file);
    res.writeHead(200, { "content-type": types[extname(file)] || "application/octet-stream", "cache-control": "no-cache" });
    res.end(body);
  } catch { res.writeHead(404, { "content-type": "text/plain; charset=utf-8" }); res.end("Bulunamadı"); }
});
server.listen(port, "127.0.0.1", () => console.log(`Local: http://127.0.0.1:${port}`));
