import Image from "next/image";
import Reveal from "@/components/Reveal";
import OrderForm from "@/components/OrderForm";

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

/* ── HERO (Pełne 100vh ze zwiększonym wypełnieniem) ── */
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
  titleGap = false,
}) {
  return (
    <section className="relative mt-[2rem] flex h-[calc(100svh-2rem)] w-full flex-col justify-between overflow-hidden bg-diagonal px-6 pt-12 pb-4 sm:px-[60px] lg:h-[calc(100vh-2rem)] lg:py-8">
      {/* Trójkąty w 4 rogach sekcji */}
      <span
        aria-hidden
        className="pointer-events-none absolute left-0 top-0 hidden h-0 w-0 border-solid border-t-[80px] border-r-[80px] border-r-transparent border-t-white/[0.03] sm:block lg:border-t-[150px] lg:border-r-[150px]"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute right-0 top-0 hidden h-0 w-0 border-solid border-t-[80px] border-l-[80px] border-l-transparent border-t-white/[0.03] sm:block lg:border-t-[150px] lg:border-l-[150px]"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-0 hidden h-0 w-0 border-solid border-b-[80px] border-r-[80px] border-r-transparent border-b-white/[0.03] sm:block lg:border-b-[150px] lg:border-r-[150px]"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute bottom-0 right-0 hidden h-0 w-0 border-solid border-b-[80px] border-l-[80px] border-l-transparent border-b-white/[0.03] sm:block lg:border-b-[150px] lg:border-l-[150px]"
      />

      {/* Kontener zajmuje całą dostępną przestrzeń w pionie */}
      <div className="relative z-[2] mx-auto flex h-full w-full max-w-[1300px] flex-1 flex-col items-center justify-evenly gap-6 lg:flex-row lg:justify-between lg:gap-8">
        {/* Treść / Tekst */}
        <Reveal className="flex w-full max-w-[760px] shrink-0 flex-col items-center text-center lg:items-start lg:text-left">
          <h1 className="mb-3 font-display font-black uppercase leading-[0.88] tracking-[-1px] sm:mb-4 lg:mb-6 lg:leading-[0.82] lg:tracking-[-2px]">
            <span className="block text-[40px] text-white xs:text-[52px] sm:text-[64px] md:text-[74px] lg:text-[104px] xl:text-[124px]">
              {titleTop}
            </span>
            <span className={`block text-[40px] text-brand-yellow xs:text-[52px] sm:text-[64px] md:text-[74px] lg:text-[104px] xl:text-[124px] ${titleGap ? "mt-[3px] md:mt-[20px]" : ""}`}>
              {titleBottom}
            </span>
          </h1>

          <p className="mb-6 max-w-[560px] text-[14px] leading-[1.6] text-white/75 sm:text-[15px] sm:leading-[1.7] md:max-w-[520px] lg:mb-8 lg:text-[17px]">
            {desc}
          </p>

          {/* Badges widoczne na dużych ekranach */}
          {badges.length > 0 && (
            <div className="mb-7 hidden flex-wrap justify-center gap-6 lg:flex lg:justify-start">
              {badges.map((b, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2.5 text-[13px] font-semibold uppercase tracking-[1.5px] text-[#cccccc]"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-[1.5px] border-brand-yellow text-[15px] text-brand-yellow">
                    {b.icon}
                  </span>
                  <span className="text-center lg:text-left">{b.label}</span>
                </div>
              ))}
            </div>
          )}

          {/* Przyciski Akcji */}
          <div className="relative flex w-full max-w-[460px] flex-col gap-3 xs:flex-row sm:w-auto md:max-w-[420px] lg:max-w-[460px] lg:justify-start">
            {primary && (
              <a
                href={primary.href}
                className="inline-flex min-w-[200px] flex-1 items-center justify-center gap-2.5 rounded border-2 border-brand-yellow bg-brand-yellow px-6 py-3 text-center font-display text-[14px] font-bold uppercase tracking-[2px] text-white transition-all hover:-translate-y-px hover:bg-brand-yellowDk sm:py-3.5 sm:text-[14px] lg:text-[15px]"
              >
                {primary.label}
              </a>
            )}
            {secondary && (
              <a
                href={secondary.href}
                className="inline-flex min-w-[200px] flex-1 items-center justify-center gap-2.5 rounded border-2 border-white/25 px-6 py-3 text-center font-display text-[14px] font-bold uppercase tracking-[2px] text-white transition-all hover:border-brand-yellow hover:text-brand-yellow sm:py-3.5 sm:text-[14px] lg:text-[15px]"
              >
                {secondary.label}
              </a>
            )}
          </div>

          {phone && <div className="mt-4 w-full sm:mt-6">{phone}</div>}
        </Reveal>

        {/* Obrazek oraz Statystyki */}
        {image && (
          <Reveal delay={0.15} className="relative flex h-full max-h-[60vh] w-full shrink items-center justify-center lg:max-h-[75vh] lg:w-auto lg:flex-1 lg:justify-end">
            <div className="relative flex h-full w-full items-center justify-center max-w-[340px] xs:max-w-[420px] sm:max-w-[440px] md:max-w-[380px] lg:max-w-none" style={{ width: image.w }}>
              <Image
                src={image.src}
                alt={image.alt}
                width={image.w}
                height={image.h}
                priority
                className="mx-auto h-auto max-h-[30vh] w-auto object-contain drop-shadow-[0_24px_56px_rgba(0,0,0,0.7)] transition-transform duration-500 hover:scale-105 xs:max-h-[36vh] sm:max-h-[38vh] md:max-h-[34vh] lg:max-h-[68vh] lg:ml-auto lg:mr-0 lg:w-full"
              />
              {stats.map((s, i) => (
                <div
                  key={i}
                  className={`absolute z-[2] hidden rounded-lg border border-[rgba(207,220,0,0.2)] bg-ink-600 px-6 py-4 lg:block ${
                    s.pos === "a" ? "right-[0px] top-12" : "bottom-16 left-[-10px]"
                  }`}
                >
                  <div className="font-display text-[32px] font-black leading-none text-brand-yellow">
                    {s.num}
                  </div>
                  <div className="mt-1 text-[12px] uppercase tracking-[1px] text-[#888]">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        )}
      </div>
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
            <div className={`relative mx-auto w-full max-w-[280px] sm:max-w-[400px] ${image.hoverSrc ? "-translate-x-[8vw] lg:translate-x-0" : ""}`}>
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
                  className="absolute inset-0 block w-full translate-x-[calc(18vw-20px)] object-contain opacity-0 drop-shadow-[0_30px_80px_rgba(0,0,0,0.5)] transition-opacity duration-300 group-hover:opacity-100 sm:translate-x-[14vw] md:translate-x-[10vw] lg:translate-x-[77px]"
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
