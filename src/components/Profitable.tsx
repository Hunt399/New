import { PROFITABLE } from "@/lib/content";

export function Profitable() {
  return (
    <section className="bg-brand-page">
      <div className="mx-auto max-w-[1000px] px-4 pt-16 pb-6 text-center">
        <h2 className="font-heading text-[25px] font-semibold text-brand-text">
          {PROFITABLE.title}
        </h2>
        <p className="mt-5 text-[16px] leading-[21px] text-brand-text">
          {PROFITABLE.text}
        </p>
      </div>
    </section>
  );
}
