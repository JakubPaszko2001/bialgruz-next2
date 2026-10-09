// Generuje unikalną wersję buildu do public/sw-version.json.
// Uruchamiane przed `next build` — dzięki temu KAŻDY deploy zmienia wersję,
// a service worker u klientów automatycznie czyści cały cache i pobiera świeże pliki.
import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outPath = join(__dirname, "..", "public", "sw-version.json");

const version = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;

writeFileSync(outPath, JSON.stringify({ version }, null, 2) + "\n", "utf8");
console.log(`[gen-sw-version] wersja buildu: ${version} -> public/sw-version.json`);
