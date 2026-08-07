import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import FadeUp from "@/components/animations/FadeUp";

const services = [
  {
    number: "01",
    title: "Personal Styling",
    href: "/services/personal-styling",
    description:
      "One-on-one styling experiences designed around your lifestyle, personality and goals.",
  },
  {
    number: "02",
    title: "Event Styling",
    href: "/services/event-styling",
    description:
      "Fashion direction and curated looks for special occasions, events, shoots and appearances.",
  },
  {
    number: "03",
    title: "Wardrobe Audit",
    href: "/services/wardrobe-audit",
    description:
      "Refine your wardrobe, identify essentials and build a collection that truly works for you.",
  },
  {
    number: "04",
    title: "Creative Direction",
    href: "/services/creative-direction",
    description:
      "Styling and visual direction for brands, campaigns, creators and editorial projects.",
  },
];

export default function ServicesPage() {
  return (
    <main>
      {/* PAGE HERO */}
      <section className="pt-44 pb-16">
        <Container>
          <FadeUp>
            <span className="text-sm tracking-[0.35em] text-(--primary)">
              STYLING SERVICES
            </span>
          </FadeUp>

          <FadeUp>
            <h1 className="mt-6 max-w-3xl font-(--font-playfair) text-5xl leading-none md:text-7xl">
              Style is personal.
              <br />
              We help you define it.
            </h1>
          </FadeUp>

          <FadeUp>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-(--muted)">
              Through styling, creative direction and wardrobe consulting,
              TSE helps individuals and brands express themselves with
              clarity and confidence.
            </p>
          </FadeUp>
        </Container>
      </section>

      {/* SERVICES */}
      <section className="pb-24">
        <Container>
          <div className="space-y-4">
            {services.map((service) => (
              <FadeUp key={service.title}>
                <Link
                  href={service.href}
                  className="group flex flex-col gap-6 border border-(--border) p-8 transition-colors duration-300 hover:border-(--primary) md:flex-row md:items-center md:justify-between"
                >
                  <div className="flex items-start gap-6">
                    <span className="font-(--font-playfair) text-4xl text-(--primary)">
                      {service.number}
                    </span>

                    <div>
                      <h3 className="font-(--font-playfair) text-3xl">
                        {service.title}
                      </h3>
                      <p className="mt-3 max-w-xl text-lg leading-relaxed text-(--muted)">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  <span className="flex items-center gap-1 text-sm tracking-[0.25em] text-(--primary) transition-transform duration-300 group-hover:translate-x-2">
                    EXPLORE
                    <ArrowUpRight size={16} />
                  </span>
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
              Ready When You Are
            </span>
          </FadeUp>

          <FadeUp>
            <h2 className="mt-6 font-(--font-playfair) text-4xl leading-none md:text-5xl">
              Let&apos;s work together.
            </h2>
          </FadeUp>

          <FadeUp>
            <div className="mt-10">
              <Button
                href="/contact"
                className="rounded-none px-8 py-4 text-xs tracking-[0.2em] uppercase"
              >
                Work With TSE
              </Button>
            </div>
          </FadeUp>
        </Container>
      </section>
    </main>
  );
}