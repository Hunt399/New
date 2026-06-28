import type { ServicePageData } from "@/types";
import { ServiceHero } from "@/components/ServiceHero";
import { ContentBlocks, PriceTableView } from "@/components/ContentBlocks";
import { BrandsList } from "@/components/BrandsList";
import { CtaBanner } from "@/components/CtaBanner";
import { Reviews } from "@/components/Reviews";
import { Faq } from "@/components/Faq";

// match the dedicated price section ("Цены выкупа …"), not generic "стоимость" prose
const PRICE_RE = /^Цены|таблиц/i;

export function ServicePageView({ data }: { data: ServicePageData }) {
  // place the price table after the section that talks about prices, else at the end
  const priceIdx = data.table
    ? data.sections.findIndex((s) => PRICE_RE.test(s.heading))
    : -1;

  return (
    <>
      <ServiceHero title={data.title} />

      <section className="bg-brand-page">
        <div className="mx-auto max-w-[1000px] px-4 py-12">
          {data.intro.length > 0 && <ContentBlocks blocks={data.intro} />}

          {data.sections.map((section, i) => (
            <div key={i} className="mt-8">
              <h2 className="font-heading text-[22px] font-semibold text-brand-text">
                {section.heading}
              </h2>
              <ContentBlocks blocks={section.items} />
              {data.table && i === priceIdx && (
                <PriceTableView table={data.table} />
              )}
            </div>
          ))}

          {data.table && priceIdx === -1 && (
            <div className="mt-8">
              <PriceTableView table={data.table} />
            </div>
          )}
        </div>
      </section>

      <BrandsList />
      <CtaBanner />
      <Reviews />
      <Faq />
    </>
  );
}
