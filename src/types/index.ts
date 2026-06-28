// Content structures for the avtocare.com.ua clone

export interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
  active?: boolean;
}

export interface Advantage {
  icon: string; // /images/advantages-N.png
  title: string;
  description: string;
}

export interface ProcessStep {
  number: number;
  icon: string; // /images/plan-N.png
  title: string;
  description: string;
}

export interface Variant {
  icon: string; // /images/variant-*.png
  label: string;
}

export interface BoughtCar {
  image: string; // /images/slider/slide-N.jpg
  model: string; // e.g. "LEXUS LX 570 2008г"
  mileage: string; // e.g. "пробег 200 тыс. км"
  price: string; // e.g. "был выкуплен за $29 500"
}

export interface Review {
  avatar: string; // /images/otzyv-N.jpg
  text: string;
  author: string; // e.g. "Роман, Киев"
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ContactInfo {
  phones: string[];
  email: string;
  address: string;
}

// Service & content pages (extracted from /service/<slug>/ etc.)
export type ContentBlock =
  | { t: "p"; text: string }
  | { t: "list"; items: string[] };

export interface ContentSection {
  heading: string;
  items: ContentBlock[];
}

export interface PriceTable {
  headers: string[];
  rows: string[][];
}

export interface ServicePageData {
  title: string;
  intro: ContentBlock[];
  sections: ContentSection[];
  table: PriceTable | null;
}

// Text pages (О компании, Контакты) and blog posts
export type PageBlock =
  | { t: "p"; text: string }
  | { t: "h"; text: string }
  | { t: "list"; items: string[] };

export interface TextPageData {
  title: string;
  blocks: PageBlock[];
}

export interface BlogPost {
  slug: string;
  title: string;
  image: string | null;
  blocks: PageBlock[];
}
