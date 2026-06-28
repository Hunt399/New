"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { CONTACTS, NAV_ITEMS } from "@/lib/content";
import { PhoneIcon, ChevronDownIcon } from "@/components/icons";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-[701] transition-all duration-300",
        scrolled
          ? "bg-brand-dark shadow-[0_2px_5px_rgba(0,0,0,0.1)]"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex max-w-[1240px] items-center justify-between px-4">
        {/* Logo + phones */}
        <div className="flex items-center gap-6">
          <a href="#" className="block shrink-0">
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
          </a>
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
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={cn(
                "flex items-center gap-1 text-[16px] transition-colors",
                item.active
                  ? "text-brand-orange"
                  : "text-brand-nav hover:text-white",
              )}
            >
              <span>{item.label}</span>
              {item.hasDropdown && <ChevronDownIcon className="text-[14px]" />}
            </a>
          ))}
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
        <nav className="flex flex-col gap-1 bg-brand-dark px-4 pb-4 lg:hidden">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className={cn(
                "border-b border-white/10 py-3 text-[16px]",
                item.active ? "text-brand-orange" : "text-brand-nav",
              )}
            >
              {item.label}
            </a>
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
