import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import Footer from "@/components/Footer";

export const metadata = {
  title: "404 – Nie znaleziono strony | BIALGRUZ",
  description:
    "Strona, której szukasz, nie istnieje lub została przeniesiona. Wróć na stronę główną BIALGRUZ.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <>
      <SiteNav />
      <main className="flex min-h-[100svh] flex-col bg-ink-800 pt-16">
        <section className="bg-diagonal relative flex flex-1 items-center overflow-hidden px-6 py-20 sm:px-[52px]">
          <span
            aria-hidden
            className="pointer-events-none absolute left-0 top-0 h-0 w-0 border-solid border-t-[80px] border-r-[80px] border-r-transparent border-t-white/[0.03] lg:border-t-[150px] lg:border-r-[150px]"
          />

          <div className="relative z-[2] mx-auto flex w-full max-w-[1300px] flex-col items-center text-center">
            <span className="font-display text-[clamp(120px,22vw,320px)] font-black leading-[0.85] tracking-[-4px] text-brand-yellow">
              404
            </span>

            <h1 className="mt-4 font-display text-[clamp(28px,4vw,52px)] font-black uppercase leading-[0.95] tracking-[-1px] text-white">
              Nie ma tu takiej strony
            </h1>

            <p className="mt-6 max-w-[520px] text-[15px] leading-[1.7] text-white/55">
              Strona, której szukasz, nie istnieje lub została przeniesiona. Sprawdź adres albo wróć na stronę główną —
              mamy tam wszystko: toalety przenośne, kontenery i big bagi.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/"
                className="group/cta inline-flex items-center gap-3 rounded-[3px] bg-brand-yellow px-9 py-[16px] font-display text-[14px] font-bold uppercase tracking-[2px] text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-yellowDk"
              >
                Wróć na stronę główną
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="transition-transform duration-200 group-hover/cta:translate-x-1.5"
                >
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>

              <a
                href="tel:799093000"
                className="inline-flex items-center gap-2.5 rounded-[3px] border border-white/15 px-7 py-[15px] font-display text-[14px] font-bold uppercase tracking-[2px] text-white transition-all duration-200 hover:border-brand-yellow hover:text-brand-yellow"
              >
                Zadzwoń: 799 093 000
              </a>
            </div>

            <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[13px] uppercase tracking-[1.5px] text-white/40">
              <Link href="/toalety-przenosne" className="transition-colors hover:text-brand-yellow">
                Toalety przenośne
              </Link>
              <Link href="/kontenery" className="transition-colors hover:text-brand-yellow">
                Kontenery na gruz
              </Link>
              <Link href="/bigbag" className="transition-colors hover:text-brand-yellow">
                Big Bagi 1m³
              </Link>
              <Link href="/kontakt" className="transition-colors hover:text-brand-yellow">
                Kontakt
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
