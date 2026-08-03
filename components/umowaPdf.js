const plDate = (v) => (v ? new Date(v).toLocaleDateString("pl-PL") : "");

// Mapuje rekord zamówienia z bazy na dane szablonu umowy
export function orderToUmowaData(order) {
  const ru = order.rodzajuslugi || "";
  const typ = /umywalk/i.test(ru) ? "Z umywalką" : /standard/i.test(ru) ? "Standardowa" : /pakiet/i.test(ru) ? "wg pakietu" : "";
  const serw = ru.match(/(\d+)\s*serwis/i);
  const equip = (() => {
    const part = (order.message || "").split(/Wyposażenie:/i)[1];
    if (!part) return "Brak";
    return (
      part
        .split("\n")
        .map((s) => s.replace(/^[•\s]+/, "").trim())
        .filter(Boolean)
        .join(", ") || "Brak"
    );
  })();
  const addr = order.koordynaty
    ? order.koordynaty
    : [order.address, `${order.postcode || ""} ${order.city || ""}`.trim()].filter(Boolean).join(", ");
  // Podpis + data/godzina z pola message (zapisane przy podpisaniu)
  const sig = (order.message || "").match(/Podpisano elektronicznie przez:\s*(.+?)(?:\s+—\s+(.+))?\s*$/m);
  return {
    data_awarcia: plDate(order.dataUtworzenia),
    nr_umowy: order.numerZlecenia || "",
    zleceniodawca_nazwa: (order.nip || "").trim() || [order.name, order.forname].filter(Boolean).join(" "),
    zleceniodawca_nip: order.nip || "",
    zleceniodawca_adres: addr,
    zleceniodawca_tel: order.phone || "",
    zleceniodawca_email: order.email || "",
    lokalizajca: addr,
    ilosc_kabin: order.ilosc != null ? String(order.ilosc) : "",
    typ_kabiny: typ,
    wyposazenie: equip,
    liczba_serwisow: serw ? serw[1] : "",
    data_podstawienia: plDate(order.dataDostawy),
    data_zakonczenia: plDate(order.dataOdbioru),
    cena_jednostkowa: "",
    cena_laczna: order.szacowany || "",
    _signature: sig ? sig[1].trim() : "",
    _signedAt: sig && sig[2] ? sig[2].trim() : "",
  };
}

// Zwraca wypełniony HTML szablonu (do podglądu w iframe)
export async function buildUmowaHtml(data) {
  const raw = await (await fetch("/Umowa.html")).text();
  return raw.replace(/\{\{(\w+)\}\}/g, (_, k) => (data[k] != null ? data[k] : ""));
}

// Wypełnia szablon /Umowa.html danymi i generuje PDF przez jsPDF (jak w panelu — z fontem DejaVu,
// polskie znaki OK, tekst zaznaczalny). Bez html2canvas (to dawało pustą stronę).
export async function downloadUmowaPdf(data, filename = "umowa-BIALGRUZ.pdf") {
  const raw = await (await fetch("/Umowa.html")).text();
  const filled = raw.replace(/\{\{(\w+)\}\}/g, (_, k) => (data[k] != null ? data[k] : ""));
  const parsed = new DOMParser().parseFromString(filled, "text/html");
  const container = parsed.querySelector(".page-container") || parsed.body;

  const { jsPDF } = await import("jspdf");
  const doc = new jsPDF({ unit: "pt", format: "a4" });

  // Font Unicode (polskie znaki)
  try {
    const buf = await (await fetch("/fonts/DejaVuSans.ttf")).arrayBuffer();
    let bin = "";
    const bytes = new Uint8Array(buf);
    for (let i = 0; i < bytes.length; i++) bin += String.fromCharCode(bytes[i]);
    doc.addFileToVFS("DejaVuSans.ttf", btoa(bin));
    doc.addFont("DejaVuSans.ttf", "DejaVu", "normal");
    doc.setFont("DejaVu", "normal");
  } catch (e) {
    console.error("Font PDF nie załadowany:", e);
  }

  const margin = 42;
  const pageW = doc.internal.pageSize.getWidth();
  const pageH = doc.internal.pageSize.getHeight();
  const maxW = pageW - margin * 2;
  let y = margin;

  const ensure = (h) => {
    if (y + h > pageH - margin) {
      doc.addPage();
      y = margin;
    }
  };

  const write = (text, { size = 10, gapAfter = 6, align = "left", color = [44, 62, 80], indent = 0 } = {}) => {
    const t = (text || "").replace(/\s+/g, " ").trim();
    if (!t) return;
    doc.setFontSize(size);
    doc.setTextColor(color[0], color[1], color[2]);
    const lines = doc.splitTextToSize(t, maxW - indent);
    const x = align === "right" ? pageW - margin : align === "center" ? pageW / 2 : margin + indent;
    const lh = size * 1.4;
    for (const line of lines) {
      ensure(lh);
      doc.text(line, x, y, { align });
      y += lh;
    }
    y += gapAfter;
  };

  const cl = (el) => (typeof el.className === "string" ? el.className : "");

  for (const el of Array.from(container.children)) {
    const c = cl(el);
    const tag = el.tagName;

    if (c.includes("header-container")) {
      write(el.querySelector("h1")?.textContent, { size: 16, gapAfter: 4, align: "center", color: [26, 37, 47] });
      write(el.querySelector(".subtitle")?.textContent, { size: 9, gapAfter: 14, align: "center", color: [127, 140, 141] });
      continue;
    }
    if (c.includes("date-container")) {
      write(el.textContent, { size: 10, align: "right", gapAfter: 12 });
      continue;
    }
    if (c.includes("party-card")) {
      // każdy wiersz (rozdzielony <br>) osobno
      const html = el.innerHTML.replace(/<br\s*\/?>/gi, "\n");
      const tmp = parsed.createElement("div");
      tmp.innerHTML = html;
      const text = tmp.textContent;
      text.split("\n").forEach((line) => write(line, { size: 10, gapAfter: 2 }));
      y += 8;
      continue;
    }
    if (c.includes("section-title")) {
      ensure(24);
      y += 8;
      write(el.textContent, { size: 11.5, gapAfter: 6, color: [26, 37, 47] });
      continue;
    }
    if (c.includes("note")) {
      write(el.textContent, { size: 8.5, gapAfter: 6, color: [90, 90, 90] });
      continue;
    }
    if (tag === "P") {
      write(el.textContent, { size: 10, gapAfter: 6 });
      continue;
    }
    if (tag === "UL" || tag === "OL") {
      Array.from(el.querySelectorAll(":scope > li")).forEach((li) =>
        write("•  " + li.textContent, { size: 10, gapAfter: 3, indent: 14 })
      );
      y += 4;
      continue;
    }
    if (tag === "TABLE" && c.includes("signatures")) {
      ensure(80);
      y += 34;
      const half = maxW / 2;
      doc.setFontSize(10);
      doc.setTextColor(52, 73, 94);
      // Podpisy nad liniami: po lewej stały podpis firmy, po prawej podpis zamawiającego
      doc.text("Jarosław Czerniawski", margin, y - 4);
      if (data._signature) doc.text(data._signature, margin + half, y - 4);
      doc.text("__________________________", margin, y);
      doc.text("__________________________", margin + half, y);
      y += 16;
      doc.text("Zleceniobiorca", margin + 50, y);
      doc.text("Zleceniodawca", margin + half + 50, y);
      // Data i godzina podpisu po stronie zamawiającego
      if (data._signedAt) {
        y += 14;
        doc.setFontSize(8.5);
        doc.setTextColor(90, 90, 90);
        doc.text(`Podpisano: ${data._signedAt}`, margin + half, y);
      }
      y += 20;
      continue;
    }
    write(el.textContent, { size: 10, gapAfter: 6 });
  }

  doc.save(filename);
}
