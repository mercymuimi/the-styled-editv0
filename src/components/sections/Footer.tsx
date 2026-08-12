import Link from "next/link";

import Container from "@/components/ui/Container";

const exploreLinks = [
  { label: "The Edit", href: "/edit" },
  { label: "Styling", href: "/styling" },
  { label: "Journal", href: "/journal" },
  { label: "Lifestyle", href: "/lifestyle" },
  { label: "Our Story", href: "/about" },
];

const connectLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/dressandstyle2025",
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@thestylededit25",
  },
  {
    label: "WhatsApp Community",
    href: "https://chat.whatsapp.com/DZGoBCqjN2yF5Fdef3DRRm",
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-(--border) bg-(--surface)">
      <Container>
        <div className="py-16 sm:py-20 lg:py-24">
          {/* MAIN FOOTER */}
          <div className="grid gap-14 lg:grid-cols-[1.6fr_0.7fr_0.7fr] lg:gap-20">
            {/* BRAND */}
            <div>
              <p className="mb-5 text-[10px] uppercase tracking-[0.35em] text-(--primary)">
                The Styled Edit
              </p>

              <h2 className="max-w-xl font-(--font-playfair) text-4xl leading-[0.95] tracking-[-0.03em] sm:text-5xl lg:text-6xl">
                Style is personal.
                <br />
                <span className="italic">Make it yours.</span>
              </h2>

              <p className="mt-7 max-w-md text-sm leading-7 text-(--muted) sm:text-base">
                A Nairobi fashion and lifestyle house curating thrift,
                styling, culture and creative experiences for a new
                generation.
              </p>

              <div className="mt-8 flex items-center gap-3">
                <span className="h-px w-10 bg-(--primary)" />

                <span className="text-[9px] uppercase tracking-[0.3em] text-(--muted)">
                  Nairobi · Kenya · 2026
                </span>
              </div>
            </div>

            {/* EXPLORE */}
            <div>
              <h3 className="text-[10px] uppercase tracking-[0.3em] text-(--primary)">
                Explore
              </h3>

              <nav className="mt-6 flex flex-col gap-4">
                {exploreLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="w-fit text-sm text-(--foreground) transition-colors duration-300 hover:text-(--primary)"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* CONNECT */}
            <div>
              <h3 className="text-[10px] uppercase tracking-[0.3em] text-(--primary)">
                Connect
              </h3>

              <div className="mt-6 flex flex-col gap-4">
                {connectLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-fit text-sm text-(--foreground) transition-colors duration-300 hover:text-(--primary)"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* NEWSLETTER / COMMUNITY STRIP */}
          <div className="mt-16 border-y border-(--border) py-8 sm:mt-20">
            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between md:gap-10">
              <div>
                <p className="text-[10px] uppercase tracking-[0.3em] text-(--primary)">
                  Join The Edit
                </p>

                <p className="mt-2 font-(--font-playfair) text-xl sm:text-2xl">
                  Stay close to what we're creating.
                </p>
              </div>

              <Link
                href="/community"
                className="inline-flex w-fit items-center border border-(--foreground) px-6 py-3 text-[10px] uppercase tracking-[0.22em] transition-all duration-300 hover:bg-(--foreground) hover:text-white"
              >
                Join the community
              </Link>
            </div>
          </div>

          {/* BOTTOM */}
          <div className="flex flex-col gap-4 pt-8 text-[10px] uppercase tracking-[0.18em] text-(--muted) sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 The Styled Edit. All rights reserved.</p>

            <p>Fashion · Culture · Community</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}