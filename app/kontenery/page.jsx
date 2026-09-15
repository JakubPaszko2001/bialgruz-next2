import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import Footer from "@/components/Footer";
import { Hero, Strip, WhySection, StepsSection, Contact } from "@/components/subUI";
import OfferKontenery from "@/components/OfferKontenery";
import Packages from "@/components/Packages";
import OfferTransition from "@/components/OfferTransition";
import Locations from "@/components/Locations";
import ContactInfo from "@/components/ContactInfo";

export const metadata = {
  title: "Kontenery i Big Bagi na odpady budowlane – BIALGRUZ",
  description: "Wynajem kontenerów i big bagów na gruz oraz odpady budowlane. Szybkie podstawienie, wywóz i legalna utylizacja w regionie.",
};

const phoneBlock = (
  <div className="flex flex-col gap-4 border-t border-white/[0.08] pt-6 md:flex-row md:items-stretch md:justify-center md:gap-6 lg:justify-start">
    <div className="flex items-center gap-3.5">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-yellow text-[18px] text-ink-black">📞</span>
      <div>
        <div className="text-[12px] uppercase tracking-[1px] text-[#888]">Kontenery na gruz</div>
        <a href="tel:799091000" className="block font-display text-[26px] font-bold leading-[1.25] tracking-[1px] text-white transition-colors hover:text-brand-yellow">
          799 091 000
        </a>
        <a href="tel:799092000" className="block font-display text-[26px] font-bold leading-[1.25] tracking-[1px] text-white transition-colors hover:text-brand-yellow">
          799 092 000
        </a>
      </div>
    </div>

    {/* Przejścia do innych podstron (bez własnej podstrony kontenerów) */}
        <div className="hidden md:flex">
      <Link
        href="/bigbag"
        className="group inline-flex h-full items-center justify-between gap-3 rounded-lg border border-white/15 bg-white/[0.07] py-2.5 pl-5 pr-4 backdrop-blur-md transition-all duration-300 hover:bg-brand-yellow lg:w-[224px]"
      >
        <span className="flex min-w-0 items-center gap-2.5">
          <span className="shrink-0 text-[16px] leading-none text-brand-yellow transition-colors group-hover:text-ink-black">🛍️</span>
          <span className="text-left leading-tight">
            <span className="block text-[9px] font-semibold uppercase tracking-[2px] text-white/50 transition-colors group-hover:text-ink-black/70">
              Zobacz też
            </span>
            <span className="font-display text-[13px] font-bold uppercase tracking-[1px] text-white transition-colors group-hover:text-ink-black sm:text-[14px]">
              BIG BAGI
            </span>
          </span>
        </span>
        <span className="shrink-0 text-[16px] text-brand-yellow transition-transform group-hover:translate-x-1 group-hover:text-ink-black">
          →
        </span>
      </Link>
    </div>
        <div className="hidden md:flex">
      <Link
        href="/toalety-przenosne"
        className="group inline-flex h-full items-center justify-between gap-3 rounded-lg border border-white/15 bg-white/[0.07] py-2.5 pl-5 pr-4 backdrop-blur-md transition-all duration-300 hover:bg-brand-yellow lg:w-[224px]"
      >
        <span className="flex min-w-0 items-center gap-2.5">
          <span className="shrink-0 text-[16px] leading-none text-brand-yellow transition-colors group-hover:text-ink-black">🚻</span>
          <span className="text-left leading-tight">
            <span className="block text-[9px] font-semibold uppercase tracking-[2px] text-white/50 transition-colors group-hover:text-ink-black/70">
              Zobacz też
            </span>
            <span className="font-display text-[13px] font-bold uppercase tracking-[1px] text-white transition-colors group-hover:text-ink-black sm:text-[14px]">
              TOALETY
            </span>
          </span>
        </span>
        <span className="shrink-0 text-[16px] text-brand-yellow transition-transform group-hover:translate-x-1 group-hover:text-ink-black">
          →
        </span>
      </Link>
    </div>
  </div>
);

export default function KonteneryPage() {
  return (
        <>
      <SiteNav
        orderHref="#zamow"
        links={[
          { label: "Oferta", href: "#oferta" },
          { label: "Dlaczego my", href: "#dlaczego" },
          { label: "Proces wynajmu", href: "#jak" },
          { label: "Zamów", href: "#zamow" },
          { label: "Lokalizacje", href: "#lokalizacje" },
          { label: "Kontakt", href: "#kontakt" },
        ]}
      />
      <OfferTransition from="left">
        <Hero
                    activePage="kontenery"
          titleTop="Kontenery"
          titleBottom="na odpady"
          desc="Wynajem kontenerów i big bagów na gruz oraz odpady budowlane — na każdą budowę, remont i inwestycję. Szybkie podstawienie, wywóz i legalna utylizacja w całym regionie."
          badges={[
            { icon: "✓", label: <>Szybkie<br />podstawienie</> },
            { icon: "↺", label: <>Wywóz i<br />utylizacja</> },
            { icon: "◉", label: <>Legalne<br />składowanie</> },
          ]}
          primary={{ label: "Wybierz kontener →", href: "#oferta" }}
          secondary={{ label: "Proces wynajmu", href: "#jak" }}
          phone={phoneBlock}
          image={{ src: "/kontener-bialgruz.png", alt: "Kontener na gruz BIALGRUZ", w: 500, h: 520 }}
          stats={[
            { num: "1000+", label: "Wywiezionych kontenerów", pos: "a" },
            { num: "24h", label: "Czas podstawienia", pos: "b" },
          ]}
        />

        <Strip items={["Gruz i Beton", "Odpady Budowlane", "Ziemia i Piasek", "Odpady Zmieszane", "Big Bagi"]} />

                <OfferKontenery />

        <Packages />

        <WhySection
          title={
            <>
              Doświadczenie
              <br />i <em className="not-italic text-brand-yellow">rzetelność</em>
            </>
          }
          features={[
            { title: "Szybkie podstawienie", text: "Podstawiamy kontener lub big bag w uzgodnionym terminie na terenie całego regionu — również w weekendy." },
            { title: "Wywóz na czas", text: "Odbieramy pełny kontener w umówionym terminie i w razie potrzeby podstawiamy kolejny — bez przestojów na budowie." },
            { title: "Legalna utylizacja", text: "Odpady trafiają do certyfikowanych punktów przetwarzania. Otrzymujesz komplet dokumentów odbioru odpadów." },
            { title: "Pełna obsługa", text: "Podstawienie, wywóz i utylizacja — wszystko w jednej cenie. Nie musisz się o nic martwić." },
          ]}
          image={{ src: "/kontener-bialgruz.png", alt: "Kontener na gruz BIALGRUZ" }}
        />

        <StepsSection
          sub="Prosty proces online — od formularza do wywiezionego gruzu."
          steps={[
            { title: "Formularz online", text: "Wypełnij krótki formularz na stronie — wybierz rodzaj odpadu, pojemność i termin." },
            { title: "Automatyczna wycena", text: "Cenę zobaczysz od razu na stronie — wyliczana automatycznie, bez czekania na kontakt." },
            { title: "Podstawienie", text: "Podstawiamy kontener lub big bag we wskazanym miejscu w uzgodnionym terminie." },
            { title: "Wywóz", text: "Odbieramy pełny kontener i przekazujemy odpady do legalnej utylizacji." },
          ]}
        />

        <Contact mode="kontenery" />
        <Locations />
        <ContactInfo />
        <Footer copy="© 2025 BIALGRUZ. Wynajem kontenerów i big bagów na odpady budowlane." />
      </OfferTransition>
    </>
  );
}
