"use client";

import { useRef } from "react";
import Image from "next/image";
import { SectionHeading } from "@/components/SectionHeading";
import { BOUGHT_CARS, SLIDER_TITLE } from "@/lib/content";
import { ArrowLeftIcon, ArrowRightIcon } from "@/components/icons";

export function BoughtSlider() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollByCard = (dir: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector("[data-card]");
    const step = card ? (card as HTMLElement).offsetWidth + 24 : 320;
    track.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <section className="bg-brand-page">
      <div className="mx-auto max-w-[1240px] px-4 py-14">
        <SectionHeading className="uppercase">{SLIDER_TITLE}</SectionHeading>

        <div className="relative mt-10">
          <div
            ref={trackRef}
            className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {BOUGHT_CARS.map((car) => (
              <article
                key={car.image}
                data-card
                className="relative aspect-[4/3] w-[calc(100%-0px)] shrink-0 snap-start overflow-hidden sm:w-[calc((100%-24px)/2)] lg:w-[calc((100%-48px)/3)]"
              >
                <Image
                  src={car.image}
                  alt={car.model}
                  fill
                  sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent px-5 pb-4 pt-12 text-white">
                  <h3 className="font-heading text-[17px] font-semibold">
                    {car.model}
                  </h3>
                  <p className="text-[14px] text-white/85">{car.mileage}</p>
                  <p className="text-[15px] font-semibold">{car.price}</p>
                </div>
              </article>
            ))}
          </div>

          <button
            type="button"
            aria-label="Назад"
            onClick={() => scrollByCard(-1)}
            className="absolute -left-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/70 text-white transition-colors hover:bg-black lg:-left-5"
          >
            <ArrowLeftIcon className="text-[20px]" />
          </button>
          <button
            type="button"
            aria-label="Вперёд"
            onClick={() => scrollByCard(1)}
            className="absolute -right-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/70 text-white transition-colors hover:bg-black lg:-right-5"
          >
            <ArrowRightIcon className="text-[20px]" />
          </button>
        </div>
      </div>
    </section>
  );
}
