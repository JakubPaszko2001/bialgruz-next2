import Link from "next/link";

export default function PhoneBlock({
  phone = "799 093 000",
  label = "KONTENERY I BIG BAGI",
  href = "/kontenery",
}) {
  return (
    <div className="flex flex-col gap-3">
      {/* 1. Główny blok z ikoną i numerem telefonu */}
      <div className="flex items-center gap-3.5 border-t border-white/[0.08] pt-6">
        <a
          href={`tel:${phone.replace(/\s+/g, "")}`}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-yellow text-[18px] text-ink-black shadow-lg transition-transform hover:scale-105"
        >
          📞
        </a>
        <div>
          <div className="text-[12px] uppercase tracking-[1px] text-[#888]">
            Toalety przenośne
          </div>
          <a
            href={`tel:${phone.replace(/\s+/g, "")}`}
            className="block font-display text-[26px] font-bold leading-[1.25] tracking-[1px] text-white transition-colors hover:text-brand-yellow"
          >
            {phone}
          </a>
        </div>
      </div>

      {/* 2. Nowy osobny DIV przypięty do prawej krawędzi (wzór przycisku z prawej strony) */}
      <div className="">
        <Link
          href={href}
          aria-label={`Przejdź do: ${label}`}
          className="group flex items-center gap-2 rounded-l-full border border-r-0 border-white/15 bg-white/[0.07] py-2.5 pl-4 pr-3 backdrop-blur-md transition-all duration-300 hover:gap-3 hover:bg-brand-yellow sm:gap-2.5 sm:py-3 sm:pl-6 sm:pr-4"
        >
          <span className="text-right leading-tight">
            <span className="hidden text-[9px] font-semibold uppercase tracking-[2px] text-white/50 transition-colors group-hover:text-ink-black/70 sm:block">
              Zobacz też
            </span>
            <span className="flex items-center justify-end gap-1.5 font-display text-[11px] font-bold uppercase tracking-[1px] text-white transition-colors group-hover:text-ink-black sm:text-[15px]">
              {label}
            </span>
          </span>
          <span className="text-[15px] leading-none text-brand-yellow transition-all group-hover:translate-x-0.5 group-hover:text-ink-black sm:text-[18px]">
            →
          </span>
        </Link>
      </div>
    </div>
  );
}