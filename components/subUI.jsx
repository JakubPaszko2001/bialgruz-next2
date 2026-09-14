import Image from "next/image";
import Reveal from "@/components/Reveal";
import OrderForm from "@/components/OrderForm";
import HeroSwitch from "@/components/HeroSwitch";

/* ── Small helpers ── */
export function Eyebrow({ children, className = "" }) {
  return (
    <div className={`mb-3 font-display text-[12px] font-bold uppercase tracking-[4px] text-brand-yellow ${className}`}>
      {children}
    </div>
  );
}

export function SectionTitle({ children, className = "" }) {
  return (
    <h2 className={`mb-5 font-display text-[clamp(36px,5vw,56px)] font-black uppercase leading-[1.05] text-white ${className}`}>
      {children}
    </h2>
  );
}

const check = (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0 text-brand-yellow">
    <path d="M3 8l3.5 3.5L13 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/* ── HERO (Design mobilny rozszerzony na Tablety < lg) ── */
export function Hero({
  titleTop,
  titleBottom,
  desc,
  badges = [],
  primary,
  secondary,
  phone,
  image,
  stats = [],
  activePage,
}) {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-diagonal px-6 pt-[110px] pb-16 sm:px-[60px] sm:pt-[120px] sm:pb-20">
      <div className="relative z-[1] mx-auto grid w-full max-w-[1300px] grid-cols-1 items-center gap-12 text-center lg:grid-cols-2 lg:text-left">
        <Reveal className="mx-auto flex w-full max-w-[800px] flex-col items-center lg:mx-0 lg:max-w-none lg:items-start">
          <h1 className="mb-5 font-display text-[clamp(52px,7vw,112px)] font-black uppercase leading-[0.85] tracking-[-1.5px]">
            <span className="block">{titleTop}</span>
            <span className="block text-brand-yellow">{titleBottom}</span>
          </h1>

          <p className="mb-7 max-w-[600px] text-[15px] leading-[1.65] text-[#cccccc] lg:max-w-[440px]">
            {desc}
          </p>

          {/* Badges widoczne dopiero od ekranów desktopowych (lg:) */}
          <div className="mb-7 hidden flex-wrap justify-center gap-6 lg:flex lg:justify-start">
            {badges.map((b, i) => (
              <div
                key={i}
                className="flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[1.5px] text-[#cccccc]"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-[1.5px] border-brand-yellow text-[14px] text-brand-yellow">
                  {b.icon}
                </span>
                <span className="text-center lg:text-left">{b.label}</span>
              </div>
            ))}
          </div>

          {/* Przyciski jednakowej wielkości, wyśrodkowane na mobile/tablecie */}
          <div className="flex w-full max-w-[420px] flex-wrap items-center justify-center gap-4 sm:w-auto lg:justify-start">
            {primary && (
              <a
                href={primary.href}
                className="inline-flex min-w-[200px] flex-1 items-center justify-center gap-2.5 rounded border-2 border-brand-yellow bg-brand-yellow px-[26px] py-3 text-center font-display text-[15px] font-bold uppercase tracking-[2px] text-white transition-all hover:-translate-y-px hover:bg-brand-yellowDk hover:border-brand-yellowDk sm:flex-none"
              >
                {primary.label}
              </a>
            )}
            {secondary && (
              <a
                href={secondary.href}
                className="inline-flex min-w-[200px] flex-1 items-center justify-center gap-2.5 rounded border-2 border-white/25 px-[26px] py-3 text-center font-display text-[15px] font-bold uppercase tracking-[2px] text-white transition-all hover:border-brand-yellow hover:text-brand-yellow sm:flex-none"
              >
                {secondary.label}
              </a>
            )}
          </div>

          {phone && <div className="mt-6 w-full">{phone}</div>}
        </Reveal>

        {image && (
          <Reveal delay={0.15} className="relative flex items-center justify-center">
            <div className="relative w-full max-w-[500px] lg:max-w-none" style={{ width: image.w }}>
              <Image
                src={image.src}
                alt={image.alt}
                width={image.w}
                height={image.h}
                priority
                className="mx-auto h-auto max-h-[50vh] w-full object-contain lg:max-h-[75vh]"
              />
              {stats.map((s, i) => (
                <div
                  key={i}
                  className={`absolute z-[2] hidden rounded-lg border border-[rgba(207,220,0,0.2)] bg-ink-600 px-5 py-3.5 lg:block ${
                    s.pos === "a" ? "right-[-10px] top-10" : "bottom-14 left-[-20px]"
                  }`}
                >
                  <div className="font-display text-[28px] font-black leading-none text-brand-yellow">
                    {s.num}
                  </div>
                  <div className="mt-0.5 text-[11px] uppercase tracking-[1px] text-[#888]">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        )}
      </div>

      {activePage && <HeroSwitch active={activePage} />}
    </section>
  );
}

/* ── STRIP ── */
export function Strip({ items }) {
  return (
    <div className="hidden bg-brand-yellow px-[60px] py-4 lg:block">
      <div className="mx-auto flex w-full max-w-[1300px] flex-wrap items-center justify-center gap-x-[60px] gap-y-3 overflow-hidden">
        {items.map((it, i) => (
          <span key={i} className="flex items-center gap-2.5">
            <span className="whitespace-nowrap font-display text-[14px] font-bold uppercase tracking-[2px] text-white">
              ▸ {it}
            </span>
            {i < items.length - 1 && (
              <span className="h-1.5 w-1.5 rounded-full bg-white/50" />
            )}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ── WHY ── */
export function WhySection({ title, features, image }) {
  return (
    <section id="dlaczego" className="flex flex-col justify-center bg-ink-black px-6 py-16 sm:px-[60px] sm:py-20">
      <div className="mx-auto w-full max-w-[1300px]">
        <Reveal>
          <Eyebrow className="mb-8">Dlaczego my</Eyebrow>
          <SectionTitle>{title}</SectionTitle>
        </Reveal>
        <div className="mt-8 grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
          <div className="flex flex-col gap-3.5">
            {features.map((f, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="flex items-start gap-5 rounded-lg border border-white/[0.04] bg-ink-600 px-5 py-4 transition-colors hover:border-[rgba(207,220,0,0.2)]">
                  <div className="min-w-[54px] font-display text-[48px] font-black leading-none text-[rgba(207,220,0,0.15)]">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <h3 className="mb-1.5 font-display text-[20px] font-bold uppercase tracking-[1px] text-white">{f.title}</h3>
                    <p className="text-[14px] leading-[1.6] text-[#888]">{f.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.2} className="group relative">
            <div className="absolute inset-[-40px] bg-[radial-gradient(ellipse,rgba(207,220,0,0.06)_0%,transparent_70%)]" />
            <div className="relative mx-auto w-full max-w-[400px]">
              <Image
                src={image.src}
                alt={image.alt}
                width={400}
                height={520}
                className={`relative block w-full object-contain drop-shadow-[0_30px_80px_rgba(0,0,0,0.5)] transition-opacity duration-300 ${
                  image.hoverSrc ? "group-hover:opacity-0" : ""
                }`}
              />
              {image.hoverSrc && (
                <Image
                  src={image.hoverSrc}
                  alt={image.alt}
                  width={400}
                  height={520}
                  className="absolute inset-0 block w-full object-contain opacity-0 drop-shadow-[0_30px_80px_rgba(0,0,0,0.5)] transition-opacity duration-300 group-hover:opacity-100"
                />
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ── STEPS ── */
export function StepsSection({ sub, steps }) {
  return (
    <section id="jak" className="bg-ink-800 px-6 py-16 sm:px-[60px] sm:py-20">
      <div className="mx-auto w-full max-w-[1300px]">
        <Reveal className="mb-14 text-center">
          <Eyebrow>Proces wynajmu</Eyebrow>
          <SectionTitle>
            Jak wygląda <em className="not-italic text-brand-yellow">wynajem</em>
          </SectionTitle>
          <p className="mx-auto max-w-[500px] text-[16px] leading-[1.7] text-[#cccccc]">{sub}</p>
        </Reveal>
        <div className="relative grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={i} delay={i * 0.1} className="flex flex-col items-center px-5 text-center">
              <div className="mb-6 flex h-[88px] w-[88px] items-center justify-center rounded-full border-2 border-brand-yellow bg-ink-800">
                <span className="font-display text-[32px] font-black text-brand-yellow">{i + 1}</span>
              </div>
              <h3 className="mb-2 font-display text-[18px] font-bold uppercase tracking-[1px] text-white">{s.title}</h3>
              <p className="text-[13px] leading-[1.6] text-[#888]">{s.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── CONTACT + FORM ── */
export function Contact({ mode }) {
  return (
    <section id="zamow" className="bg-ink-black px-6 py-16 text-center sm:px-[60px] sm:py-20">
      <div className="mx-auto w-full max-w-[1300px]">
        <Reveal>
          <Eyebrow>Kontakt</Eyebrow>
          <SectionTitle>
            Gotowy do
            <br />
            zamówienia?
          </SectionTitle>
          <p className="mx-auto mb-12 max-w-[500px] text-[16px] leading-[1.7] text-[#cccccc]">
            Wypełnij formularz online — wybierz usługę, a wycenę zobaczysz od razu na stronie.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="rounded-[18px] bg-[#0f1012] p-4 shadow-[0_30px_80px_rgba(0,0,0,0.35)] sm:p-8">
            <OrderForm mode={mode} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export { check };