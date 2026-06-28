import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { PageBlocks } from "@/components/PageBlocks";
import { ValuationForm } from "@/components/ValuationForm";
import { CONTACTS_PAGE } from "@/content/pages-data";
import { CONTACTS } from "@/lib/content";
import { PhoneIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Наши контакты - AvtoCar",
  description:
    "Контакты AvtoCar: телефоны, почта Avto-care@ukr.net, Viber, адрес Киев, ул. Бережанская, 13. Закажите выкуп авто.",
};

export default function ContactsPage() {
  return (
    <>
      <PageHero title={CONTACTS_PAGE.title} />

      <section className="bg-brand-page">
        <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-12 px-4 py-12 lg:grid-cols-2">
          {/* Left: contact info */}
          <div>
            <PageBlocks blocks={CONTACTS_PAGE.blocks} />

            <div className="mt-8 space-y-4">
              {CONTACTS.phones.map((phone) => (
                <a
                  key={phone}
                  href={`tel:${phone.replace(/[^+\d]/g, "")}`}
                  className="flex items-center gap-3 text-[20px] font-medium text-brand-text transition-colors hover:text-brand-orange"
                >
                  <PhoneIcon className="text-[18px] text-brand-orange" />
                  {phone}
                </a>
              ))}
              <a
                href={`mailto:${CONTACTS.email}`}
                className="block text-[18px] text-brand-orange hover:underline"
              >
                {CONTACTS.email}
              </a>
              <a
                href="viber://chat?number=%2B380677761129"
                className="block text-[18px] text-brand-text hover:text-brand-orange"
              >
                Viber: +38 (067) 776-11-29
              </a>
              <p className="text-[18px] font-medium text-brand-text">
                {CONTACTS.address}
              </p>
            </div>
          </div>

          {/* Right: valuation form */}
          <div>
            <ValuationForm />
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-brand-page pb-14">
        <div className="mx-auto max-w-[1240px] px-4">
          <iframe
            title="Карта — Киев, ул. Бережанская, 13"
            src="https://maps.google.com/maps?q=%D0%9A%D0%B8%D0%B5%D0%B2%2C%20%D1%83%D0%BB.%20%D0%91%D0%B5%D1%80%D0%B5%D0%B6%D0%B0%D0%BD%D1%81%D0%BA%D0%B0%D1%8F%2C%2013&z=15&output=embed"
            className="h-[400px] w-full border border-black/10"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </>
  );
}
