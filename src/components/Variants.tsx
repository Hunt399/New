import Image from "next/image";
import { VARIANTS } from "@/lib/content";

export function Variants() {
  return (
    <section className="bg-brand-page">
      <div className="mx-auto max-w-[1240px] px-4 py-12">
        <h2 className="text-center font-heading text-[25px] font-semibold uppercase text-brand-text">
          Предлагаем варианты автовыкупа
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-3">
          {VARIANTS.map((v) => (
            <div key={v.label} className="flex flex-col items-center text-center">
              <Image
                src={v.icon}
                alt={v.label}
                width={90}
                height={70}
                className="h-[64px] w-auto object-contain"
              />
              <p className="mt-4 max-w-[240px] text-[18px] leading-[24px] text-brand-text">
                {v.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
