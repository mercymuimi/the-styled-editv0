"use client";

import Link from "next/link";
import { Tag, Shirt, Users, PenSquare, ArrowUpRight, ArrowRight } from "lucide-react";

import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
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
    href: "/#community",
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
    <section id="house" className="border-t border-(--border) py-32">
      <Container>
        <FadeUp>
          <SectionHeader
            center
            eyebrow="The House"
            title="A modern fashion house."
            description="Built around style, community, creativity and self-expression."
          />
        </FadeUp>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map(({ number, title, phrase, href, icon: Icon }) => (
            <FadeUp key={title}>
              <Link
                href={href}
                className="group relative block border border-(--border) bg-white p-6 transition-colors duration-300 hover:border-(--primary)"
              >
                <div className="flex items-center justify-between">
                  <span className="font-(--font-playfair) text-2xl text-(--primary)">
                    {number}
                  </span>
                  <Icon size={16} className="text-(--muted)" strokeWidth={1.5} />
                </div>

                <h3 className="mt-4 font-(--font-playfair) text-2xl">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-(--muted)">{phrase}</p>

                <ArrowUpRight
                  size={14}
                  className="absolute bottom-6 right-6 text-(--muted) opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
              </Link>
            </FadeUp>
          ))}
        </div>

        {/* VIEW ALL — TODO: confirm destination once /about (or a dedicated overview page) exists */}
        <FadeUp>
          <div className="mt-12 text-center">
            <Link
              href="/about"
              className="group inline-flex items-center gap-2 text-xs tracking-[0.25em] uppercase text-(--foreground)"
            >
              View All
              <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </FadeUp>
      </Container>
    </section>
  );
}