import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SERVICE_PAGES } from "@/content/services-data";
import { SERVICES } from "@/lib/content";
import { ServicePageView } from "@/components/ServicePageView";

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const data = SERVICE_PAGES[slug];
  if (!data) return {};
  return {
    title: `${data.title} - AvtoCar`,
    description: data.intro[0]?.t === "p" ? data.intro[0].text.slice(0, 160) : undefined,
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = SERVICE_PAGES[slug];
  if (!data) notFound();
  return <ServicePageView data={data} />;
}
