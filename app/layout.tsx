import type { Metadata } from "next";
import { Syne, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navigation/Navbar";
import SmoothScroll from "@/components/motion/SmoothScroll";

const syne = Syne({
  variable: "--font-syne-family",
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter-family",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "UXterity — Smart Ideas. Bold Executions.",
  description:
    "We are a premium digital agency that builds empires through branding, technology, and go-to-market strategy.",
  keywords: ["agency", "branding", "digital", "design", "development", "UXterity"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${inter.variable}`}>
      <body>
        <SmoothScroll>
          <Navbar />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
