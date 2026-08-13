import { jsPDF } from "jspdf";
import fs from "node:fs";
import path from "node:path";

const OUT = path.resolve("public/wycena.pdf");
const FONT = path.resolve("public/fonts/DejaVuSans.ttf");

const YELLOW = [234, 179, 8];
const DARK = [26, 26, 26];
const GRAY = [120, 120, 120];
const LINE = [228, 228, 228];

const doc = new jsPDF({ unit: "pt", format: "a4" });
const W = doc.internal.pageSize.getWidth();
const H = doc.internal.pageSize.getHeight();
const M = 48;

const b64 = fs.readFileSync(FONT).toString("base64");
doc.addFileToVFS("DejaVuSans.ttf", b64);
doc.addFont("DejaVuSans.ttf", "DejaVu", "normal");
doc.setFont("DejaVu", "normal");

const zl = (n) => n.toLocaleString("pl-PL") + " zł";

/* Pozycje wyceny */
const items = [
  ["Projekt UI/UX i responsywny design (mobile / tablet / desktop)", 2500],
  ["Strona główna + podstrony ofertowe (Kontenery, Toalety) z animacjami", 1800],
  ["Formularz zamówień z automatyczną wyceną (geokodowanie adresu, kalkulacja dojazdu)", 2200],
  ["Integracja z bazą danych Supabase (zapis zamówień, numeracja zleceń)", 1200],
  ["Panele administracyjne — zarządzanie zamówieniami (edycja, filtry, wyszukiwarka, archiwum)", 2800],
  ["Generowanie umów PDF + podpis elektroniczny (osobna strona podpisu)", 1800],
  ["Integracja płatności online PayU (utworzenie płatności + powiadomienia)", 1500],
  ["Pakiety, wyposażenie dodatkowe i dynamiczny cennik", 900],
  ["SEO, favicony, optymalizacja wydajności i responsywności", 800],
  ["Wdrożenie (deploy), testy i konfiguracja", 700],
];
const netto = items.reduce((s, i) => s + i[1], 0);
const vat = Math.round(netto * 0.23);
const brutto = netto + vat;

/* Nagłówek */
doc.setFillColor(...DARK);
doc.rect(0, 0, W, 96, "F");
doc.setFillColor(...YELLOW);
doc.rect(0, 96, W, 4, "F");
doc.setTextColor(255, 255, 255);
doc.setFontSize(24);
doc.text("WYCENA", M, 46);
doc.setTextColor(...YELLOW);
doc.setFontSize(11);
doc.text("REALIZACJA SERWISU INTERNETOWEGO", M, 68);
doc.setTextColor(255, 255, 255);
doc.setFontSize(13);
doc.text("BIALGRUZ", W - M, 44, { align: "right" });
doc.setFontSize(8.5);
doc.setTextColor(200, 200, 200);
doc.text("kontenery · big-bagi · toalety przenośne", W - M, 62, { align: "right" });

let y = 128;

/* Meta */
doc.setFontSize(9.5);
doc.setTextColor(...GRAY);
doc.text("Dla: BIALGRUZ Sp. z o.o., Porosły-Kolonia 12M, 16-070 Choroszcz", M, y);
doc.text("Data wyceny: " + new Date().toLocaleDateString("pl-PL"), W - M, y, { align: "right" });
y += 26;

/* Tabela — nagłówek */
doc.setFillColor(...YELLOW);
doc.rect(M, y - 12, W - 2 * M, 22, "F");
doc.setTextColor(...DARK);
doc.setFontSize(10.5);
doc.text("ZAKRES PRAC", M + 10, y + 3);
doc.text("NETTO", W - M - 10, y + 3, { align: "right" });
y += 26;

/* Pozycje */
const priceX = W - M - 10;
const nameW = W - 2 * M - 100;
items.forEach(([name, price], idx) => {
  doc.setFontSize(10);
  doc.setTextColor(...DARK);
  const lines = doc.splitTextToSize(`${idx + 1}.  ${name}`, nameW);
  doc.text(lines, M + 6, y);
  doc.setFontSize(10.5);
  doc.text(zl(price), priceX, y, { align: "right" });
  y += lines.length * 13 + 8;
  doc.setDrawColor(...LINE);
  doc.line(M, y - 5, W - M, y - 5);
});

/* Podsumowanie */
y += 12;
const boxW = 240;
const boxX = W - M - boxW;
const rowH = 22;
const summary = [
  ["Suma netto", zl(netto)],
  ["VAT 23%", zl(vat)],
];
doc.setFontSize(10.5);
summary.forEach(([k, v]) => {
  doc.setTextColor(...GRAY);
  doc.text(k, boxX, y);
  doc.setTextColor(...DARK);
  doc.text(v, priceX, y, { align: "right" });
  y += rowH;
});
/* Brutto — wyróżnione */
doc.setFillColor(...DARK);
doc.rect(boxX - 12, y - 15, boxW + 12, 30, "F");
doc.setTextColor(...YELLOW);
doc.setFontSize(12);
doc.text("RAZEM BRUTTO", boxX, y + 4);
doc.setTextColor(255, 255, 255);
doc.setFontSize(13);
doc.text(zl(brutto), priceX, y + 4, { align: "right" });
y += 42;

fs.writeFileSync(OUT, Buffer.from(doc.output("arraybuffer")));
console.log("Zapisano:", OUT, "| netto:", netto, "| brutto:", brutto);
