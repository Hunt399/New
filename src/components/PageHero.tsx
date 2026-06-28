export function PageHero({ title }: { title: string }) {
  return (
    <section className="relative overflow-hidden bg-brand-dark">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,#000_0%,rgba(0,0,0,0)_100%)]" />
      <div className="relative mx-auto max-w-[1240px] px-4 pb-12 pt-32 md:pt-40">
        <h1 className="font-heading text-[30px] font-normal leading-[38px] text-white">
          {title}
        </h1>
      </div>
    </section>
  );
}
