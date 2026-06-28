import Image from "next/image";
import { DOCS } from "@/lib/content";

export function DocsSection() {
  return (
    <section className="relative overflow-hidden bg-brand-dark">
      {/* folded yellow corner top-right */}
      <div className="absolute right-0 top-0 z-20 h-0 w-0 border-b-[40px] border-l-[40px] border-b-transparent border-l-brand-yellow" />

      {/* faded image on the left */}
      <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-1/2 md:block">
        <Image
          src={DOCS.image}
          alt=""
          fill
          className="object-cover object-center opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-brand-dark" />
      </div>

      <div className="relative mx-auto grid max-w-[1240px] grid-cols-1 gap-8 px-4 py-20 md:grid-cols-2">
        <div className="hidden md:block" />
        <div>
          <h2 className="text-center font-heading text-[25px] font-semibold uppercase leading-tight text-white">
            {DOCS.title}
          </h2>
          <ul className="mt-6 list-disc space-y-4 pl-6 text-[16px] leading-[21px] text-white/90">
            {DOCS.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
