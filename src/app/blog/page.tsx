import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { BLOG_POSTS } from "@/content/pages-data";

export const metadata: Metadata = {
  title: "Блог - AvtoCar",
  description: "Полезные статьи о продаже и выкупе автомобилей в Киеве.",
};

export default function BlogPage() {
  return (
    <>
      <PageHero title="Блог" />
      <section className="bg-brand-page">
        <div className="mx-auto max-w-[1240px] px-4 py-14">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {BLOG_POSTS.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col overflow-hidden border border-black/10 bg-white transition-all hover:shadow-[0_10px_30px_rgba(0,0,0,0.1)]"
              >
                {post.image && (
                  <div className="relative aspect-[3/2] overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                )}
                <div className="flex flex-1 flex-col p-6">
                  <h2 className="font-heading text-[19px] font-semibold leading-snug text-brand-text group-hover:text-brand-orange">
                    {post.title}
                  </h2>
                  <span className="mt-4 text-[15px] font-medium text-brand-orange">
                    Читать далее →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
