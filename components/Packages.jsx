import Reveal from "@/components/Reveal";
import { Eyebrow, SectionTitle, check } from "@/components/subUI";

const truckIcon = (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
    <path d="M2 6h11v9H2z" />
    <path d="M13 9h5l3 3v3h-8z" />
    <circle cx="6.5" cy="17.5" r="1.8" />
    <circle cx="17.5" cy="17.5" r="1.8" />
  </svg>
);

const crateIcon = (
  <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7">
    <path d="M12 3l8 4v10l-8 4-8-4V7z" fill="currentColor" />
    <path d="M4 7l8 4 8-4M12 11v10" stroke="#0f1012" strokeWidth="1.4" />
  </svg>
);

const bigBoxIcon = (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
    <path d="M2 8h20l-2 11H4z" />
    <path d="M1 6h22v2H1z" />
  </svg>
);

/* Pakiety — dane zgodne z formularzem zamówień (OrderForm.jsx). */
const PACKAGES = [
  {
    label: "Pakiet Remont Gruz",
    base: "999",
    save: 438,
    icon: truckIcon,
    featured: false,
    items: [
      "Kontener 5 m³ (czysty gruz)",
      "Toaleta przenośna na 3 miesiące",
      "2 serwisy toalety / mies.",
    ],
  },
  {
    label: "Pakiet Budowa Standard",
    base: "1890",
    save: 696,
    icon: crateIcon,
    featured: true,
    items: [
      "Kontener 5 m³ (gruz zmieszany)",
      "Toaleta przenośna na 4 miesiące",
      "2 serwisy toalety / mies.",
    ],
  },
  {
    label: "Pakiet Budowa Max",
    base: "2790",
    save: 1115,
    icon: bigBoxIcon,
    featured: false,
    items: [
      "Kontener 7 m³ (gruz zmieszany)",
      "Toaleta przenośna na 5 miesięcy",
      "4 serwisy toalety / mies.",
      "GRATIS: Big Bag 1 m³ na czysty gruz",
    ],
  },
];

export default function Packages() {
  return (
    <section id="pakiety" className="bg-ink-800 px-6 py-20 sm:px-[60px]">
      <div className="mx-auto w-full max-w-[1300px]">
        <Reveal className="mb-13 flex flex-wrap items-end justify-between gap-10">
          <div>
            <Eyebrow>Pakiety</Eyebrow>
            <SectionTitle>
              Kontener + <em className="not-italic text-brand-yellow">toaleta</em>
              <br />w jednej cenie
            </SectionTitle>
          </div>
          <p className="max-w-[500px] text-[16px] leading-[1.7] text-[#cccccc]">
            Kompletne zestawy na dłuższe budowy i remonty — kontener na odpady oraz toaleta przenośna z serwisem. Wybierz pakiet i oszczędzaj.
          </p>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {PACKAGES.map((p, i) => (
            <Reveal key={p.label} delay={i * 0.1}>
              <div
                className={`relative flex h-full flex-col rounded-[10px] border bg-ink-600 px-[22px] pb-[22px] pt-12 transition-all hover:-translate-y-1 hover:border-brand-yellow lg:pt-7 ${
                  p.featured ? "border-brand-yellow" : "border-white/[0.07]"
                }`}
              >
                {p.featured && (
                  <span className="absolute left-1/2 top-[-13px] -translate-x-1/2 whitespace-nowrap rounded-full bg-brand-yellow px-3.5 py-1 font-display text-[11px] font-bold uppercase tracking-[2px] text-ink-black">
                    Popularny
                  </span>
                )}
                <span className="absolute right-3 top-[15px] rounded bg-brand-yellow/15 px-2 py-1 text-[10px] font-bold uppercase tracking-[0.5px] text-brand-yellow">
                  −{p.save} zł
                </span>

                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-xl border-[1.5px] border-brand-yellow bg-[linear-gradient(145deg,#1c1500,#2e2200)] text-brand-yellow">
                    {p.icon}
                  </div>
                  <div className="flex flex-col">
                    <strong className="font-display text-[17px] font-black uppercase leading-[1.1] tracking-[1px] text-white">
                      {p.label}
                    </strong>
                    <span className="text-[10px] font-bold uppercase tracking-[1.5px] text-[#888]">kontener + toaleta</span>
                  </div>
                </div>

                <div className="mb-1 flex items-baseline gap-1.5">
                  <div className="font-display text-[60px] font-black leading-none text-brand-yellow">{p.base}</div>
                  <div className="flex flex-col leading-[1.2]">
                    <span className="font-display text-[18px] font-bold text-white">zł</span>
                    <span className="font-display text-[13px] font-bold tracking-[1px] text-white">BRUTTO</span>
                  </div>
                </div>
                <div className="mb-5 text-[12px] text-[#888]">(VAT 8% wliczony)</div>
                <div className="mb-4 h-px bg-white/[0.07]" />

                <ul className="mb-[22px] flex flex-1 flex-col gap-[9px]">
                  {p.items.map((it) => (
                    <li key={it} className="flex items-center gap-2.5 text-[13px] text-white/75">
                      {check}
                      {it}
                    </li>
                  ))}
                </ul>

                <a
                  href="#zamow"
                  className="flex items-center justify-center gap-2.5 rounded-md bg-brand-yellow px-5 py-3.5 font-display text-[13px] font-bold uppercase tracking-[2px] text-white transition-colors hover:bg-brand-yellowDk md:text-[11px] md2:text-[13px]"
                >
                  Wybierz pakiet →
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
