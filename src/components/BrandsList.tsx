import { BRANDS, BRANDS_TITLE } from "@/lib/content";

export function BrandsList() {
  return (
    <section className="bg-brand-page">
      <div className="mx-auto max-w-[1100px] px-4 py-14">
        <h2 className="text-center font-heading text-[25px] font-semibold text-brand-text">
          {BRANDS_TITLE}
        </h2>

        {/* column-major fill (top→bottom, then next column) to match original */}
        <ul className="mx-auto mt-8 max-w-[900px] columns-2 gap-x-6 text-center text-[16px] leading-[26px] text-brand-text sm:columns-4">
          {BRANDS.map((brand) => (
            <li key={brand}>{brand}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
