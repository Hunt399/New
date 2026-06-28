import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { PageBlocks } from "@/components/PageBlocks";
import { CtaBanner } from "@/components/CtaBanner";
import { ABOUT_PAGE } from "@/content/pages-data";

export const metadata: Metadata = {
  title: "О компании - AvtoCar",
  description:
    "AvtoCar — команда профессионалов, более 10 лет занимающихся выкупом автомобилей в Киеве. Честные цены, быстрая сделка, любое состояние.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero title={ABOUT_PAGE.title} />
      <section className="bg-brand-page">
        <div className="mx-auto max-w-[1000px] px-4 py-12">
          <PageBlocks blocks={ABOUT_PAGE.blocks} />
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
