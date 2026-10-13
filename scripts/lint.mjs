import { readFile } from "node:fs/promises";
import { glob } from "node:fs/promises";

let failed = false;
for await (const file of glob(["index.html", "styles.css", "src/**/*.js"])) {
  const content = await readFile(file, "utf8");
  if (/href=["']#["']/.test(content)) { console.error(`${file}: pasif # bağlantısı bulundu`); failed = true; }
  if (/wa\.me|api\.whatsapp/.test(content)) { console.error(`${file}: doğrulanmamış WhatsApp bağlantısı bulundu`); failed = true; }
  if (/★★★★★|testimonial/i.test(content)) { console.error(`${file}: yasaklı sahte yorum örüntüsü bulundu`); failed = true; }
}
if (failed) process.exit(1);
console.log("Lint kontrolleri geçti.");
