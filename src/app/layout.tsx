import type { Metadata } from "next";
import { Manrope, Unbounded } from "next/font/google";
import "./globals.css";

const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin", "cyrillic"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AQUA DRIVE — Премиальная автомойка и детейлинг",
  description:
    "Профессиональная автомойка и детейлинг нового поколения. Безупречная чистота в каждой детали. Демо-лендинг AQUA DRIVE.",
  keywords: [
    "автомойка",
    "детейлинг",
    "AQUA DRIVE",
    "химчистка салона",
    "полировка",
    "керамика",
  ],
  openGraph: {
    title: "AQUA DRIVE — Премиальная автомойка",
    description: "Безупречная чистота. В каждой детали.",
    locale: "ru_RU",
    type: "website",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ru"
      className={`${unbounded.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg text-text font-sans">{children}</body>
    </html>
  );
}
