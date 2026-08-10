"use client";

import Link from "next/link";
import {
  Tag,
  Shirt,
  Users,
  PenSquare,
  ArrowUpRight,
  ArrowRight,
} from "lucide-react";

import Container from "@/components/ui/Container";
import FadeUp from "@/components/animations/FadeUp";

const pillars = [
  {
    number: "01",
    title: "Curate",
    phrase: "Thoughtfully sourced thrift, selected for character.",
    href: "/edit",
    icon: Tag,
  },
  {
    number: "02",
    title: "Style",
    phrase: "Personal styling and wardrobe direction.",
    href: "/services",
    icon: Shirt,
  },
  {
    number: "03",
    title: "Connect",
    phrase: "Events and gatherings for the community.",
    href: "#community",
    icon: Users,
  },
  {
    number: "04",
    title: "Create",
    phrase: "Editorial stories and cultural conversations.",
    href: "/journal",
    icon: PenSquare,
  },
];

export default function House() {
  return (
    <section
      id="house"
      className="border-t border-(--border) py-28 md:py-36"
    >
      <Container>
        {/* INTRO */}
        <div className="mx-auto max-w-3xl text-center">
          <FadeUp>
            <span className="text-[10px] uppercase tracking-[0.35em] text-(--primary)">
              The House
            </span>
          </FadeUp>

          <FadeUp>
            <h2 className="mt-5 font-(--font-playfair) text-4xl leading-tight tracking-[-0.03em] md:text-5xl">
              A modern fashion house.
            </h2>
          </FadeUp>

          <FadeUp>
            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-(--muted) md:text-base">
              Built around style, community, creativity and self-expression.
              The Styled Edit brings fashion and lifestyle together for a
              generation defining its own way of living.
            </p>
          </FadeUp>
        </div>

        {/* PILLARS */}
        <div className="mt-16 grid border border-(--border) sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map(
            ({ number, title, phrase, href, icon: Icon }, index) => (
              <FadeUp key={title}>
                <Link
                  href={href}
                  className={`
                    group relative flex min-h-60 flex-col justify-between
                    border-(--border) bg-(--background) p-7
                    transition-colors duration-300
                    hover:bg-(--surface)
                    ${index !== 0 ? "border-t sm:border-l sm:border-t-0" : ""}
                    ${index === 2 ? "lg:border-l" : ""}
                  `}
                >
                  {/* TOP */}
                  <div className="flex items-start justify-between">
                    <span className="text-xs tracking-[0.2em] text-(--primary)">
                      {number}
                    </span>

                    <Icon
                      size={15}
                      strokeWidth={1.3}
                      className="text-(--muted) transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </div>

                  {/* CONTENT */}
                  <div>
                    <h3 className="font-(--font-playfair) text-2xl">
                      {title}
                    </h3>

                    <p className="mt-3 max-w-50 text-xs leading-5 text-(--muted)">
                      {phrase}
                    </p>
                  </div>

                  {/* ARROW */}
                  <div className="absolute bottom-6 right-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <ArrowUpRight
                      size={15}
                      strokeWidth={1.4}
                      className="text-(--foreground)"
                    />
                  </div>
                </Link>
              </FadeUp>
            ),
          )}
        </div>

        {/* CLOSING STATEMENT */}
        <FadeUp>
          <div className="mt-16 flex flex-col gap-8 border-t border-(--border) pt-12 md:flex-row md:items-end md:justify-between">
            <p className="max-w-2xl font-(--font-playfair) text-3xl leading-tight tracking-[-0.02em] md:text-4xl">
              A house built around{" "}
              <em>style, expression and connection.</em>
            </p>

            <Link
              href="/about"
              className="group inline-flex shrink-0 items-center gap-3 border-b border-(--foreground) pb-2 text-[10px] uppercase tracking-[0.3em] transition-colors hover:border-(--primary) hover:text-(--primary)"
            >
              Discover the house

              <ArrowRight
                size={14}
                strokeWidth={1.3}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </FadeUp>
      </Container>
    </section>
  );
}