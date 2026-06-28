import { ValuationForm } from "@/components/ValuationForm";

export function ServiceHero({ title }: { title: string }) {
  return (
    <section className="relative overflow-hidden bg-brand-dark">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,#000_0%,rgba(0,0,0,0)_60%)]" />
      <div className="relative mx-auto grid max-w-[1240px] grid-cols-1 items-start gap-10 px-4 pb-20 pt-32 md:pt-36 lg:grid-cols-2 lg:gap-16 lg:pb-28 lg:pt-44">
        <div className="lg:pt-2">
          <h1 className="font-heading text-[30px] font-normal leading-[38px] text-white">
            {title}
          </h1>
          <div className="mt-5 space-y-1 text-[16px] leading-[21px] text-white/85">
            <p>Узнайте стоимость своего авто сейчас:</p>
            <p>Получите максимальную сумму за свое авто уже сегодня.</p>
            <p>Автовыкуп в Киеве.</p>
          </div>
        </div>
        <div className="w-full lg:justify-self-end lg:pl-6">
          <ValuationForm />
        </div>
      </div>
    </section>
  );
}
