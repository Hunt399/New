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
