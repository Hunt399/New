import Image from "next/image";
import { SectionHeading } from "@/components/SectionHeading";
import { PROCESS_STEPS } from "@/lib/content";

export function ProcessSteps() {
  return (
    <section className="bg-brand-page">
      <div className="mx-auto max-w-[1240px] px-4 py-14">
        <SectionHeading separator>Как происходит процесс выкупа авто?</SectionHeading>

        <div className="mt-12 grid grid-cols-1 gap-x-4 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS_STEPS.map((step) => (
            <div key={step.number} className="flex flex-col items-center text-center">
              <div className="relative flex h-[150px] w-[150px] items-center justify-center rounded-full border border-black/10">
                <Image
                  src={step.icon}
                  alt={step.title}
                  width={110}
                  height={110}
                  className="h-[110px] w-[110px] rounded-full object-contain"
                />
                <span className="absolute bottom-1 right-2 flex h-7 w-7 items-center justify-center rounded-full bg-black text-[14px] font-semibold text-white">
                  {step.number}
                </span>
              </div>
              <h3 className="mt-5 font-heading text-[19px] font-medium uppercase tracking-wide text-brand-text">
                {step.title}
              </h3>
              <p className="mt-3 max-w-[230px] text-[15px] leading-[21px] text-brand-text">
                {step.description}
              </p>
              {step.number === 1 && (
                <a
                  href="#valuation"
                  className="mt-4 inline-block bg-black px-5 py-2.5 text-[16px] text-white transition-opacity hover:opacity-85"
                >
                  Оставить заявку
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
