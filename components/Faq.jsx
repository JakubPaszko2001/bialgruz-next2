"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";

// Sekcja najczęstszych pytań. Treść jest widoczna (i zgodna z JSON-LD FAQPage),
// a poszczególne odpowiedzi rozwijane akordeonowo.
// Pytania są indeksowane — nie chowamy ich w JS bez SSR.
export default function Faq({ items = [], title = "Częste pytania", sub }) {
  const [open, setOpen] = useState(0);
  if (!items.length) return null;

  return (
    <section id="faq" className="bg-ink-black px-6 py-20 sm:px-[60px]">
      <div className="mx-auto w-full max-w-[900px]">
        <Reveal className="mb-10 text-center">
          <div className="mb-3 font-display text-[12px] font-bold uppercase tracking-[4px] text-brand-yellow">
            FAQ
          </div>
          <h2 className="font-display text-[clamp(32px,4.5vw,52px)] font-black uppercase leading-[1.05] text-white">
            {title}
          </h2>
          {sub && <p className="mx-auto mt-4 max-w-[560px] text-[15px] leading-[1.7] text-white/55">{sub}</p>}
        </Reveal>

        <div className="flex flex-col gap-3">
          {items.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={item.question}
                className="overflow-hidden rounded-xl border border-white/[0.08] bg-ink-900"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
                >
                  <span className="font-display text-[15px] font-bold uppercase tracking-[0.5px] text-white sm:text-[16px]">
                    {item.question}
                  </span>
                  <span
                    aria-hidden
                    className={`shrink-0 text-[20px] leading-none text-brand-yellow transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-[14px] leading-[1.7] text-white/60 sm:px-6 sm:pb-6 sm:text-[15px]">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
