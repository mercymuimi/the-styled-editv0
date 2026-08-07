import Image from "next/image";
import Link from "next/link";
import { Tag, Shirt, Users, PenSquare } from "lucide-react";

import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import FadeUp from "@/components/animations/FadeUp";

const pillars = [
  {
    number: "01",
    title: "Curate",
    href: "/edit",
    icon: Tag,
    description:
      "Thoughtfully sourced thrift collections and fashion pieces selected to inspire individuality, confidence and self-expression.",
  },
  {
    number: "02",
    title: "Style",
    href: "/services",
    icon: Shirt,
    description:
      "Personal styling, wardrobe audits and event styling tailored to help you define and elevate your personal aesthetic.",
  },
  {
    number: "03",
    title: "Connect",
    href: "/#community",
    icon: Users,
    description:
      "Events, gatherings and creative experiences bringing together people who share a passion for fashion and culture.",
  },
  {
    number: "04",
    title: "Create",
    href: "/journal",
    icon: PenSquare,
    description:
      "Editorial storytelling, campaigns and cultural conversations exploring style, identity and modern living.",
  },
];

export default function AboutPage() {
  return (
    <main>
      {/* HERO */}
      <section className="pt-44 pb-24">
        <Container>
          <FadeUp>
            <span className="text-xs tracking-[0.35em] uppercase text-(--primary)">
              About TSE
            </span>
          </FadeUp>

          <FadeUp>
            <h1 className="mt-6 max-w-3xl font-(--font-playfair) text-5xl leading-[1.05] md:text-7xl">
              The story behind the edit.
            </h1>
          </FadeUp>

          <FadeUp>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-(--muted)">
              The Styled Edit began with a simple belief: that thrifted
              fashion deserves the same care, intention and craft as
              anything found on a runway. What started as a personal
              obsession with curation has grown into a Nairobi-born fashion
              house — one piece, one story at a time.
            </p>
          </FadeUp>
        </Container>
      </section>

      {/* STORY IMAGE */}
      <section className="pb-24">
        <Container>
          <FadeUp>
            <div className="relative">
              <div className="overflow-hidden border border-(--border) bg-white shadow-[0_30px_80px_rgba(0,0,0,0.08)]">
                <Image
                  src="/images/extra11.jpg"
                  alt="The Styled Edit — our story"
                  width={1600}
                  height={900}
                  className="h-125 w-full object-cover md:h-175"
                />
              </div>

              <div className="absolute -top-5 left-8 -rotate-6 select-none">
                <div className="relative flex flex-col items-center gap-1 border border-(--foreground)/20 bg-(--background) px-5 py-4 shadow-md">
                  <span className="absolute -top-2.5 h-4 w-4 rounded-full border-2 border-(--foreground)/30" />
                  <span className="mt-2 font-(--font-playfair) text-sm italic">
                    Est.
                  </span>
                  <span className="text-[10px] tracking-[0.2em] uppercase text-(--muted)">
                    2026
                  </span>
                </div>
              </div>
            </div>
          </FadeUp>
        </Container>
      </section>

      {/* STATS */}
      <section className="border-y border-(--border) py-12">
        <Container>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs tracking-[0.2em] uppercase text-(--muted)">
            <span>Est. 2026</span>
            <span className="text-(--primary)">—</span>
            <span>Nairobi, Kenya</span>
            <span className="text-(--primary)">—</span>
            <span>A Global Community</span>
          </div>
        </Container>
      </section>

      {/* FULL PILLARS */}
      <section className="py-32">
        <Container>
          <FadeUp>
            <SectionHeader
              center
              eyebrow="What We Do"
              title="Four pillars. One house."
              description="Everything TSE does lives inside these four ideas — each one a door into a different part of the world we're building."
            />
          </FadeUp>

          <div className="mt-16 grid gap-6 lg:grid-cols-2">
            {pillars.map(({ number, title, href, icon: Icon, description }) => (
              <FadeUp key={title}>
                <Link
                  href={href}
                  className="group relative block overflow-hidden border border-(--border) bg-white p-10 transition-colors duration-300 hover:border-(--primary)"
                >
                  <span className="absolute right-6 top-0 font-(--font-playfair) text-[120px] leading-none text-black/4">
                    {number}
                  </span>

                  <Icon size={20} className="text-(--primary)" strokeWidth={1.5} />

                  <h3 className="mt-6 font-(--font-playfair) text-4xl">{title}</h3>

                  <div className="mt-6 h-px w-14 bg-(--primary) transition-all duration-500 group-hover:w-24" />

                  <p className="mt-6 max-w-md text-lg leading-relaxed text-(--muted)">
                    {description}
                  </p>
                </Link>
              </FadeUp>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="border-t border-(--border) py-32 text-center">
        <Container>
          <FadeUp>
            <span className="text-xs tracking-[0.35em] uppercase text-(--primary)">
              Join The Edit
            </span>
          </FadeUp>

          <FadeUp>
            <h2 className="mt-6 font-(--font-playfair) text-5xl leading-none md:text-6xl">
              Let&apos;s build this together.
            </h2>
          </FadeUp>

          <FadeUp>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button href="/edit" className="rounded-none px-8 py-4 text-xs tracking-[0.2em] uppercase">
                Explore The Edit
              </Button>
              <Button
                href="#newsletter"
                variant="secondary"
                className="rounded-none border border-(--foreground) px-8 py-4 text-xs tracking-[0.2em] uppercase"
              >
                Join The Community
              </Button>
            </div>
          </FadeUp>
        </Container>
      </section>
    </main>
  );
}
