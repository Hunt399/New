import Image from "next/image";
import { SectionHeading } from "@/components/SectionHeading";
import { ADVANTAGES, WHY_US_INTRO } from "@/lib/content";

export function WhyUs() {
  return (
    <section className="bg-brand-yellow">
      <div className="mx-auto max-w-[1240px] px-4 py-16">
        <SectionHeading separator>Почему мы</SectionHeading>

        <p className="mx-auto mt-2 max-w-[1000px] text-center text-[16px] leading-[21px] text-brand-text">
          {WHY_US_INTRO}
        </p>

        <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {ADVANTAGES.map((adv) => (
            <div key={adv.title} className="flex flex-col items-center text-center">
              <div className="flex h-[130px] w-[130px] items-center justify-center rounded-full bg-white shadow-[0_8px_20px_rgba(0,0,0,0.08)]">
                <Image
                  src={adv.icon}
                  alt={adv.title}
                  width={60}
                  height={60}
                  className="h-[58px] w-[58px] object-contain"
                />
              </div>
              <h3 className="mt-5 font-heading text-[20px] font-medium text-brand-text">
                {adv.title}
              </h3>
              <p className="mt-3 max-w-[220px] text-[15px] font-medium leading-[21px] text-brand-text">
                {adv.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
