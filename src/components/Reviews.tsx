import Image from "next/image";
import { SectionHeading } from "@/components/SectionHeading";
import { REVIEWS, REVIEWS_TITLE } from "@/lib/content";

export function Reviews() {
  return (
    <section className="bg-brand-page">
      <div className="mx-auto max-w-[1240px] px-4 py-14">
        <SectionHeading>{REVIEWS_TITLE}</SectionHeading>

        <div className="mt-10 grid grid-cols-1 gap-x-12 gap-y-10 md:grid-cols-2">
          {REVIEWS.map((review) => (
            <div key={review.author} className="flex items-start gap-5">
              <Image
                src={review.avatar}
                alt={review.author}
                width={120}
                height={120}
                className="h-[120px] w-[120px] shrink-0 rounded-full object-cover"
              />
              <div>
                <p className="text-[16px] leading-[21px] text-brand-text">
                  {review.text}
                </p>
                <p className="mt-3 text-[16px] font-bold text-brand-text">
                  {review.author}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
