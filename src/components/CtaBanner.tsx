import Image from "next/image";
import { CTA } from "@/lib/content";

export function CtaBanner() {
  return (
    <section className="bg-brand-yellow">
      <div className="mx-auto flex max-w-[1240px] flex-col items-center gap-10 px-4 py-14 md:flex-row md:justify-center md:gap-16">
        <Image
          src={CTA.image}
          alt="Выкуп авто"
          width={380}
          height={250}
          className="h-auto w-full max-w-[380px] object-contain"
        />

        <div className="relative w-full max-w-[300px]">
          {/* folded top-right corner */}
          <div className="absolute right-0 top-0 z-10 h-0 w-0 border-l-[26px] border-t-[26px] border-l-transparent border-t-[#dcdcdc] drop-shadow-[-2px_2px_2px_rgba(0,0,0,0.12)]" />
          <div className="relative flex flex-col items-center rounded-[10px] border-b-2 border-brand-orange bg-[#f5f5f5] px-8 py-9 text-center shadow-[0_10px_25px_rgba(0,0,0,0.12)]">
            <div className="space-y-1 text-[17px] leading-[24px] text-brand-text">
              {CTA.lines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
            <a
              href="#valuation"
              className="mt-6 inline-block bg-black px-6 py-3 text-[15px] uppercase tracking-wide text-white transition-opacity hover:opacity-85"
            >
              {CTA.button}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
