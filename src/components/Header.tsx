"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { CONTACTS, NAV_ITEMS, SERVICES } from "@/lib/content";
import { PhoneIcon, ChevronDownIcon } from "@/components/icons";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMobile = () => {
    setMenuOpen(false);
    setServicesOpen(false);
  };

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-[701] transition-all duration-300",
        scrolled || menuOpen
          ? "bg-brand-dark shadow-[0_2px_5px_rgba(0,0,0,0.1)]"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex max-w-[1240px] items-center justify-between px-4">
        {/* Logo + phones */}
        <div className="flex items-center gap-6">
          <Link href="/" className="block shrink-0">
            <Image
              src="/images/logo.png"
              alt="AvtoCar"
              width={241}
              height={196}
              priority
              className={cn(
                "w-auto transition-all duration-300",
                scrolled ? "h-[50px] py-1" : "h-[72px] py-2",
              )}
            />
          </Link>
          <div className="hidden flex-col gap-1 md:flex">
            {CONTACTS.phones.map((phone) => (
              <a
                key={phone}
                href={`tel:${phone.replace(/[^+\d]/g, "")}`}
                className="flex items-center gap-2 text-[16px] text-brand-muted transition-colors hover:text-white"
              >
                <PhoneIcon className="text-[13px]" />
                <span>{phone}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 lg:flex">
          {NAV_ITEMS.map((item) =>
            item.hasDropdown ? (
              <div key={item.label} className="group relative">
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-1 py-5 text-[16px] transition-colors",
                    isActive(item.href)
                      ? "text-brand-orange"
                      : "text-brand-nav hover:text-white",
                  )}
                >
                  <span>{item.label}</span>
                  <ChevronDownIcon className="text-[14px] transition-transform group-hover:rotate-180" />
                </Link>
                {/* dropdown */}
                <div className="invisible absolute left-0 top-full w-[300px] translate-y-1 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  <ul className="overflow-hidden rounded-b bg-brand-dark py-2 shadow-[0_10px_30px_rgba(0,0,0,0.3)]">
                    {SERVICES.map((s) => (
                      <li key={s.slug}>
                        <Link
                          href={`/service/${s.slug}`}
                          className={cn(
                            "block px-5 py-2 text-[15px] transition-colors hover:bg-white/5",
                            pathname === `/service/${s.slug}`
                              ? "text-brand-orange"
                              : "text-brand-nav hover:text-white",
                          )}
                        >
                          {s.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  "py-5 text-[16px] transition-colors",
                  isActive(item.href)
                    ? "text-brand-orange"
                    : "text-brand-nav hover:text-white",
                )}
              >
                {item.label}
              </Link>
            ),
          )}
          <button
            type="button"
            className="flex items-center gap-1 rounded border border-white/20 px-3 py-1.5 text-[14px] text-brand-nav transition-colors hover:text-white"
          >
            <span>Русский</span>
            <ChevronDownIcon className="text-[12px]" />
          </button>
        </nav>

        {/* Mobile menu toggle */}
        <button
          type="button"
          aria-label="Меню"
          onClick={() => setMenuOpen((v) => !v)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
        >
          <span className="block h-0.5 w-6 bg-white" />
          <span className="block h-0.5 w-6 bg-white" />
          <span className="block h-0.5 w-6 bg-white" />
        </button>
      </div>

      {/* Mobile menu panel */}
      {menuOpen && (
        <nav className="max-h-[80vh] overflow-y-auto bg-brand-dark px-4 pb-4 lg:hidden">
          {NAV_ITEMS.map((item) => (
            <div key={item.label}>
              <div className="flex items-center justify-between border-b border-white/10">
                <Link
                  href={item.href}
                  onClick={closeMobile}
                  className={cn(
                    "flex-1 py-3 text-[16px]",
                    isActive(item.href) ? "text-brand-orange" : "text-brand-nav",
                  )}
                >
                  {item.label}
                </Link>
                {item.hasDropdown && (
                  <button
                    type="button"
                    aria-label="Подменю услуг"
                    onClick={() => setServicesOpen((v) => !v)}
                    className="p-3 text-brand-nav"
                  >
                    <ChevronDownIcon
                      className={cn(
                        "text-[16px] transition-transform",
                        servicesOpen && "rotate-180",
                      )}
                    />
                  </button>
                )}
              </div>
              {item.hasDropdown && servicesOpen && (
                <ul className="bg-black/30">
                  {SERVICES.map((s) => (
                    <li key={s.slug}>
                      <Link
                        href={`/service/${s.slug}`}
                        onClick={closeMobile}
                        className="block border-b border-white/5 py-2.5 pl-6 pr-4 text-[15px] text-brand-nav"
                      >
                        {s.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
          <div className="flex flex-col gap-2 pt-3">
            {CONTACTS.phones.map((phone) => (
              <a
                key={phone}
                href={`tel:${phone.replace(/[^+\d]/g, "")}`}
                className="flex items-center gap-2 text-[16px] text-brand-muted"
              >
                <PhoneIcon className="text-[13px]" />
                {phone}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
