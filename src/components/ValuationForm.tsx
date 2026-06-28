"use client";

import { useState } from "react";
import { HERO } from "@/lib/content";

const FIELDS = [
  { name: "make", placeholder: "Марка автомобиля", half: true },
  { name: "model", placeholder: "Модель автомобиля", half: true },
  { name: "year", placeholder: "Год выпуска", half: true },
  { name: "phone", placeholder: "Ваш телефон", half: true },
] as const;

export function ValuationForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div id="valuation" className="relative scroll-mt-24">
      {/* folded top-right corner */}
      <div className="absolute right-0 top-0 z-10 h-0 w-0 border-l-[44px] border-t-[44px] border-l-transparent border-t-[#e8c43d] drop-shadow-[-3px_3px_3px_rgba(0,0,0,0.18)]" />
      <div className="absolute right-0 top-0 z-0 h-[44px] w-[44px] bg-[#d9b528]" />

      <div className="relative rounded-[18px] bg-brand-yellow px-8 py-9 shadow-[0_20px_40px_rgba(0,0,0,0.25)] sm:px-10">
        <h2 className="font-heading text-[24px] font-bold leading-[1.2] text-brand-text">
          {HERO.formTitle}
        </h2>
        <div className="mt-4 space-y-1 text-[16px] leading-[1.5] text-black/65">
          {HERO.formSubtitle.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>

        <form
          className="mt-6 space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {FIELDS.map((f) => (
              <input
                key={f.name}
                name={f.name}
                type="text"
                placeholder={f.placeholder}
                className="w-full border border-black/10 bg-white px-4 py-3 text-[15px] text-brand-text placeholder:text-black/45 focus:border-brand-orange focus:outline-none"
              />
            ))}
          </div>
          <textarea
            name="info"
            rows={3}
            placeholder="Дополнительная информация"
            className="w-full resize-none border border-black/10 bg-white px-4 py-3 text-[15px] text-brand-text placeholder:text-black/45 focus:border-brand-orange focus:outline-none"
          />
          <button
            type="submit"
            className="bg-black px-5 py-2.5 text-[16px] text-white transition-opacity hover:opacity-85"
          >
            {submitted ? "Заявка отправлена" : "Узнать стоимость"}
          </button>
        </form>
      </div>
    </div>
  );
}
