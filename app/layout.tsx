import type { Metadata, Viewport } from "next";
import { Hanken_Grotesk, Instrument_Serif } from "next/font/google";
import "./globals.css";

const hanken = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
  // Body text renders fine in the metric-matched fallback; leave first-load bandwidth to the hero heading font.
  preload: false,
});

const instrument = Instrument_Serif({
  variable: "--font-instrument",
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "akm Fenster — Fenster & Türen in Wuppertal und NRW",
  description:
    "Fenster, Türen, Rollläden, Markisen, Garagentore, Terrassenüberdachungen und Wintergärten — herstellerunabhängige Beratung, Lieferung und Montage aus einer Hand.",
};

export const viewport: Viewport = {
  themeColor: "#2b2f33",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="de" className={`${hanken.variable} ${instrument.variable}`}>
      <body>{children}</body>
    </html>
  );
}
