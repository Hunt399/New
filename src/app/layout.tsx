import type { Metadata, Viewport } from "next";
import { Ubuntu, Roboto_Slab, Roboto } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const ubuntu = Ubuntu({
  variable: "--font-ubuntu",
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "700"],
});

const robotoSlab = Roboto_Slab({
  variable: "--font-roboto-slab",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "600", "700"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Автовыкуп Киев - Выкуп Авто в Киеве с пробегом Дорого",
  description:
    "AvtoCar — выкуп авто в Киеве с 2016 года. Деньги за 1 час, до 94% рыночной стоимости. Любое состояние, бесплатный выезд оценщика.",
  icons: { icon: "/seo/favicon.ico" },
};

// Mobile (Pixel 3 / Chrome Android): standard device-width viewport, pinch-zoom
// left enabled for accessibility, and the browser chrome tinted to match the
// dark header so the address bar doesn't flash white above it.
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0f0f17",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${ubuntu.variable} ${robotoSlab.variable} ${roboto.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
