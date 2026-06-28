import type { Metadata } from "next";
import Link from "next/link";
import { ServiceHero } from "@/components/ServiceHero";
import { Reviews } from "@/components/Reviews";
import { Faq } from "@/components/Faq";
import { SERVICES } from "@/lib/content";
import { ArrowRightIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Услуги выкупа авто в Киеве - AvtoCar",
  description:
    "Все услуги AvtoCar: выкуп авто в любом состоянии, после ДТП, кредитных, залоговых, грузовых и нерастаможенных автомобилей в Киеве.",
};

export default function ServiceHubPage() {
  return (
    <>
      <ServiceHero title="Услуги выкупа авто в Киеве" />

      <section className="bg-brand-page">
        <div className="mx-auto max-w-[1240px] px-4 py-14">
          <h2 className="text-center font-heading text-[25px] font-semibold text-brand-text">
            Что мы выкупаем
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => (
              <Link
                key={s.slug}
                href={`/service/${s.slug}`}
                className="group flex items-center justify-between gap-3 border border-black/10 bg-white px-6 py-5 transition-all hover:border-brand-orange hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)]"
              >
                <span className="font-heading text-[17px] font-medium text-brand-text">
                  {s.label}
                </span>
                <ArrowRightIcon className="shrink-0 text-[18px] text-brand-orange transition-transform group-hover:translate-x-1" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Reviews />
      <Faq />
    </>
  );
}
