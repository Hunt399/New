import { SectionHeading } from "@/components/SectionHeading";
import { FAQ, FAQ_TITLE } from "@/lib/content";

export function Faq() {
  return (
    <section className="bg-brand-page">
      <div className="mx-auto max-w-[1240px] px-4 py-14">
        <SectionHeading>{FAQ_TITLE}</SectionHeading>

        <div className="mt-8 space-y-6">
          {FAQ.map((item) => (
            <div key={item.question}>
              <p className="text-[16px] font-medium italic text-brand-text">
                {item.question}
              </p>
              <p className="mt-3 text-[16px] leading-[21px] text-brand-text">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
