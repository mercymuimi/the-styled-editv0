"use client";

import Link from "next/link";

import Container from "@/components/ui/Container";

export default function Footer() {
  return (
    <footer
      className="border-t border-(--border) bg-white py-20"
    >
      <Container>

        <div className="grid gap-16 lg:grid-cols-[2fr_1fr_1fr]">

          {/* BRAND */}

          <div>

            <h2
              className="font-(--font-playfair) text-4xl"
            >
              The Styled Edit
            </h2>

            <p
              className="mt-6 max-w-md text-lg leading-relaxed text-(--muted)"
            >
              Curating modern style through thrift,
              styling, storytelling and creative
              experiences.
            </p>

          </div>

          {/* EXPLORE */}

          <div>

            <h3
              className="text-sm tracking-[0.3em] text-(--primary)"
            >
              EXPLORE
            </h3>

            <div className="mt-6 flex flex-col gap-4">

              <Link href="#collection" className="hover:opacity-70 transition">
                Collections
              </Link>

              <Link href="/services" className="hover:opacity-70 transition">
                Styling
              </Link>

              <Link href="#journal" className="hover:opacity-70 transition">
                Journal
              </Link>

              <Link href="#community" className="hover:opacity-70 transition">
                Community
              </Link>

            </div>

          </div>

          {/* CONNECT */}

          <div>

            <h3
              className="text-sm tracking-[0.3em] text-(--primary)"
            >
              CONNECT
            </h3>

            <div className="mt-6 flex flex-col gap-4">

              <a
                href="https://www.instagram.com/dressandstyle2025?igsh=MW1wcGVlYWp6MWMxYw%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-70 transition"
              >
                Instagram
              </a>

              <a
                href="https://www.tiktok.com/@thestylededit25?_r=1&_t=ZS-97nAqXNfVpf"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-70 transition"
              >
                TikTok
              </a>

              <a
                href="https://chat.whatsapp.com/DZGoBCqjN2yF5Fdef3DRRm"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-70 transition"
              >
                WhatsApp Community
              </a>

            </div>

          </div>

        </div>

        {/* BOTTOM */}

        <div
          className="mt-20 flex flex-col gap-4 border-t border-(--border) pt-8 text-sm text-(--muted) md:flex-row md:items-center md:justify-between"
        >
          <p>
            © {new Date().getFullYear()} The Styled Edit.
            All rights reserved.
          </p>

          <p>
            Fashion. Culture. Community.
          </p>

        </div>

      </Container>
    </footer>
  );
}