import type { Metadata } from "next";
import { Playfair_Display, Libre_Franklin } from "next/font/google";

import "./globals.css";

import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/sections/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600"],
});

const libre = Libre_Franklin({
  subsets: ["latin"],
  variable: "--font-libre-franklin",
  weight: ["400", "500", "600"],
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

        {/* pt-(--navbar-height) reserves exactly the space the fixed
            Navbar occupies (88px desktop / 64px mobile, per the
            --navbar-height token and its media query in globals.css),
            so page content no longer starts underneath it. */}
        <main className="pt-(--navbar-height)">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}