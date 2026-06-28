import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { PageBlocks } from "@/components/PageBlocks";
import { CtaBanner } from "@/components/CtaBanner";
import { BLOG_POSTS } from "@/content/pages-data";

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} - AvtoCar`,
    description:
      post.blocks.find((b) => b.t === "p")?.text.slice(0, 160) ?? undefined,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <>
      <PageHero title={post.title} />
      <section className="bg-brand-page">
        <article className="mx-auto max-w-[860px] px-4 py-12">
          {post.image && (
            <div className="relative mb-8 aspect-[16/9] overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                fill
                sizes="(min-width:860px) 860px, 100vw"
                className="object-cover"
                priority
              />
            </div>
          )}
          <PageBlocks blocks={post.blocks} />
        </article>
      </section>
      <CtaBanner />
    </>
  );
}
