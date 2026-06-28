import Image from "next/image";
import { CONTACTS } from "@/lib/content";
import { FacebookIcon, SitemapIcon } from "@/components/icons";

export function Footer() {
  return (
    <footer className="bg-brand-dark text-white">
      <div className="mx-auto grid max-w-[1240px] grid-cols-1 items-start gap-10 px-4 py-12 md:grid-cols-3 md:items-center">
        {/* Logo */}
        <div className="flex justify-center md:justify-start">
          <Image
            src="/images/logo.png"
            alt="AvtoCar"
            width={241}
            height={196}
            className="h-[110px] w-auto"
          />
        </div>

        {/* Phones */}
        <div className="flex flex-col items-center gap-2 md:items-end">
          {CONTACTS.phones.map((phone) => (
            <a
              key={phone}
              href={`tel:${phone.replace(/[^+\d]/g, "")}`}
              className="text-[20px] text-brand-orange transition-opacity hover:opacity-80"
            >
              {phone}
            </a>
          ))}
        </div>

        {/* Email + address + policy */}
        <div className="flex flex-col items-center gap-1 text-center md:items-start md:text-left">
          <a
            href={`mailto:${CONTACTS.email}`}
            className="text-[20px] text-brand-orange transition-opacity hover:opacity-80"
          >
            {CONTACTS.email}
          </a>
          <p className="text-[18px] font-medium text-white">{CONTACTS.address}</p>
          <a
            href="#"
            className="mt-4 text-[15px] text-brand-orange transition-opacity hover:opacity-80"
          >
            Политика конфиденциальности
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1240px] flex-col items-center gap-3 px-4 py-4">
          <p className="text-[15px] text-brand-orange">
            avtocare.com.ua © 2016-2022
          </p>
          <div className="flex items-center gap-4 text-white/70">
            <a href="#" aria-label="Facebook" className="hover:text-white">
              <FacebookIcon className="text-[16px]" />
            </a>
            <a href="#" aria-label="Карта сайта" className="hover:text-white">
              <SitemapIcon className="text-[16px]" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
