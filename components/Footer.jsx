import Link from "next/link";

const ArrowIcon = () => (
  <svg width="18" height="18" viewBox="0 0 16 16" fill="none" className="transition-transform duration-200 group-hover/cta:translate-x-1.5">
    <path d="M3 8h10M9 4l4 4-4 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

function FooterLink({ href, children }) {
  return (
    <Link href={href} className="text-white/60 transition-colors duration-200 hover:text-brand-yellow">
      {children}
    </Link>
  );
}

function SocialIcon({ href, path, label }) {
  return (
    <Link
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/60 transition-all duration-200 hover:border-brand-yellow hover:text-brand-yellow"
    >
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-[18px] w-[18px]">
        <path d={path} />
      </svg>
    </Link>
  );
}

export default function Footer({ copy }) {
  return (
    <footer className="border-t border-white/10 bg-black/40 px-6 py-16 sm:px-[52px]">
      <div className="mx-auto grid max-w-[1300px] grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-4">
          <span className="font-display text-3xl font-black uppercase tracking-[-1px] text-white">
            Bial<span className="text-brand-yellow">gruz</span>
          </span>
          <p className="text-[14px] leading-[1.7] text-white/50">
            Wynajem toalet przenośnych, kontenerów i big bagów na odpady. Uczciwość, terminowość i doświadczenie na każdym etapie współpracy.
          </p>
          <div className="mt-2 flex gap-3">
            <SocialIcon
              href="https://www.facebook.com/BIALGRUZ/?rdid=TMAzvx1avPIeaqaF"
              label="Facebook"
              path="M22 12a10 10 0 10-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.4v7A10 10 0 0022 12z"
            />
            <SocialIcon
              href="https://www.instagram.com/bialgruz?igsh=MXR3anZpN2F1eHd6OQ%3D%3D"
              label="Instagram"
              path="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 2 .3 2.4.5.6.2 1 .5 1.5 1 .4.4.7.9 1 1.5.2.5.4 1.2.5 2.4.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 2-.5 2.4-.2.6-.5 1-1 1.5-.4.4-.9.7-1.5 1-.5.2-1.2.4-2.4.5-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-2-.3-2.4-.5-.6-.2-1-.5-1.5-1-.4-.4-.7-.9-1-1.5-.2-.5-.4-1.2-.5-2.4C2.1 15.6 2.1 15.2 2.1 12s0-3.6.1-4.9c.1-1.2.3-2 .5-2.4.2-.6.5-1 1-1.5.4-.4.9-.7 1.5-1 .5-.2 1.2-.4 2.4-.5C8.9 2.2 9.3 2.2 12 2.2zm0 1.8c-3.1 0-3.5 0-4.7.1-1 .1-1.6.2-1.9.4-.5.2-.8.4-1.2.7-.4.4-.6.7-.7 1.2-.1.4-.3 1-.4 1.9-.1 1.2-.1 1.6-.1 4.7s0 3.5.1 4.7c.1 1 .2 1.6.4 1.9.2.5.4.8.7 1.2.4.4.7.6 1.2.7.4.1 1 .3 1.9.4 1.2.1 1.6.1 4.7.1s3.5 0 4.7-.1c1-.1 1.6-.2 1.9-.4.5-.2.8-.4 1.2-.7.4-.4.6-.7.7-1.2.1-.4.3-1 .4-1.9.1-1.2.1-1.6.1-4.7s0-3.5-.1-4.7c-.1-1-.2-1.6-.4-1.9-.2-.5-.4-.8-.7-1.2-.4-.4-.7-.6-1.2-.7-.4-.1-1-.3-1.9-.4-1.2-.1-1.6-.1-4.7-.1zm0 3.5a5.5 5.5 0 110 11 5.5 5.5 0 010-11zm0 1.8a3.7 3.7 0 100 7.4 3.7 3.7 0 000-7.4zm5.7-2a1.3 1.3 0 11-2.6 0 1.3 1.3 0 012.6 0z"
            />
            <SocialIcon
              href="https://www.tiktok.com/@bialgruz?_r=1&_t=ZN-97hsQbrEjli"
              label="TikTok"
              path="M16.5 3c.3 2.1 1.6 3.7 3.7 4v2.6c-1.4.1-2.7-.3-3.8-1v6.3c0 3.4-2.6 5.6-5.4 5.6-2.8 0-5-2.1-5-5 0-2.6 2.1-4.9 4.9-4.9.3 0 .6 0 .9.1v2.7c-.3-.1-.6-.2-.9-.2-1.3 0-2.3 1-2.3 2.2 0 1.2 1 2.1 2.2 2.1 1.3 0 2.3-1 2.3-2.6V3h2.4z"
            />
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <span className="mb-1 font-display text-[14px] font-bold uppercase tracking-[1.5px] text-brand-yellow">
            Oferta
          </span>
          <FooterLink href="/toalety-przenosne">Toalety przenośne</FooterLink>
          <FooterLink href="/kontenery">Kontenery na gruz</FooterLink>
          <FooterLink href="/bigbag">Big Bagi 1m³</FooterLink>
          <FooterLink href="/kontakt">Kontakt</FooterLink>
        </div>

        <div className="flex flex-col gap-3">
          <span className="mb-1 font-display text-[14px] font-bold uppercase tracking-[1.5px] text-brand-yellow">
            Kontakt
          </span>
          <a href="tel:+48799091000" className="text-white/60 transition-colors duration-200 hover:text-brand-yellow">
            799 091 000
          </a>
          <a href="tel:+48799092000" className="text-white/60 transition-colors duration-200 hover:text-brand-yellow">
            799 092 000
          </a>
          <a href="tel:+48799093000" className="text-white/60 transition-colors duration-200 hover:text-brand-yellow">
            799 093 000
          </a>
          <a href="mailto:biuro@bialgruz.pl" className="text-white/60 transition-colors duration-200 hover:text-brand-yellow">
            biuro@bialgruz.pl
          </a>
          <span className="text-white/40">Porosły-Kolonia 12M, 16-070 Choroszcz</span>
          <span className="text-white/40">Pon–Pt: 07:00–20:00</span>
          <span className="text-white/40">Sobota: 08:00–15:00</span>
        </div>

        <div className="flex flex-col gap-4">
          <span className="mb-1 font-display text-[14px] font-bold uppercase tracking-[1.5px] text-brand-yellow">
            Zamów wycenę
          </span>
          <p className="text-[14px] leading-[1.7] text-white/50">
            Odpowiadamy na zapytania w ciągu 12h.
          </p>
          <Link
            href="/kontakt"
            className="group/cta inline-flex w-fit items-center gap-2.5 rounded-[3px] bg-brand-yellow px-6 py-3 font-display text-[13px] font-bold uppercase tracking-[2px] text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-yellowDk"
          >
            Zamów teraz
            <ArrowIcon />
          </Link>
        </div>
      </div>

      <div className="mx-auto mt-14 flex max-w-[1300px] flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-[13px] text-white/35 sm:flex-row">
        <span>{copy || `© ${new Date().getFullYear()} Bialgruz. Wszelkie prawa zastrzeżone.`}</span>
        <span>NIP: 9662143186</span>
        <div className="flex gap-5">
          <FooterLink href="/polityka-prywatnosci">Polityka prywatności</FooterLink>
          <FooterLink href="/regulamin">Regulamin</FooterLink>
        </div>
      </div>
    </footer>
  );
}
