import type { Metadata } from "next";
import { Playfair_Display, Libre_Franklin } from "next/font/google";

import "./globals.css";

import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/sections/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const libre = Libre_Franklin({
  subsets: ["latin"],
  variable: "--font-libre-franklin",
});

export const metadata: Metadata = {
  title: "The Styled Edit",
  description:
    "A fashion and lifestyle house exploring style, culture, and modern living.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${libre.variable}`}
    >
      <body>
        <Navbar />

        <main>
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}