"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDown } from "lucide-react";

import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import FadeUp from "@/components/animations/FadeUp";

export default function Manifesto() {
  return (
    <section className="py-32 md:py-40">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-[1fr_1fr] lg:gap-28">
          {/* IMAGE */}
          <FadeUp>
            <div className="relative mx-auto w-full max-w-xl">
              {/* Soft editorial atmosphere */}
              <div className="absolute inset-8 bg-(--primary)/5 blur-3xl" />

              <div className="relative">
                {/* Main image */}
                <div className="relative overflow-hidden bg-(--surface)">
                  <Image
                    src="/images/extra11.jpg"
                    alt="The Styled Edit editorial fashion"
                    width={1200}
                    height={1400}
                    className="aspect-4/5 w-full object-cover transition-transform duration-1000 hover:scale-[1.02]"
                  />
                </div>

                {/* Editorial hangtag */}
                <div className="absolute -top-6 right-6 z-10 -rotate-6 select-none">
                  <div className="relative flex flex-col items-center gap-1 bg-(--background) px-5 py-4 shadow-[0_12px_30px_rgba(0,0,0,0.08)]">
                    {/* String loop */}
                    <span className="absolute -top-3 h-4 w-4 rounded-full border-2 border-(--foreground)/25 bg-(--background)" />

                    <span className="mt-2 text-[9px] uppercase tracking-[0.25em] text-(--muted)">
                      Style
                    </span>

                    <span className="text-[9px] uppercase tracking-[0.25em] text-(--muted)">
                      Culture
                    </span>

                    <span className="text-[9px] uppercase tracking-[0.25em] text-(--muted)">
                      Identity
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </FadeUp>

          {/* CONTENT */}
          <div className="max-w-xl">
            <FadeUp>
              <SectionHeader
                eyebrow="The Manifesto"
                title="More than what you wear."
              />
            </FadeUp>

            {/* Accent line */}
            <FadeUp>
              <div className="mt-8 h-px w-16 bg-(--primary)" />
            </FadeUp>

            <FadeUp>
              <p className="mt-8 text-xl leading-relaxed text-(--foreground) md:text-2xl">
                We believe style is a dialogue between what&apos;s been worn
                and what&apos;s next.
              </p>
            </FadeUp>

            <FadeUp>
              <p className="mt-7 text-base leading-8 text-(--muted)">
                The Styled Edit is a curated editorial house where fashion,
                culture, identity, and Nairobi&apos;s creative pulse come
                together.
              </p>
            </FadeUp>

            <FadeUp>
              <p className="mt-5 text-base leading-8 text-(--muted)">
                Through thoughtfully sourced fashion, personal styling,
                storytelling, and community, we create space for individuality
                to be seen, expressed, and celebrated.
              </p>
            </FadeUp>

            {/* Transition */}
            <FadeUp>
              <Link
                href="#house"
                className="group mt-10 inline-flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-(--foreground)"
              >
                <span className="border-b border-(--foreground) pb-2 transition-colors duration-300 group-hover:border-(--primary) group-hover:text-(--primary)">
                  See how we do it
                </span>

                <ArrowDown
                  size={14}
                  strokeWidth={1.5}
                  className="transition-transform duration-300 group-hover:translate-y-1"
                />
              </Link>
            </FadeUp>
          </div>
        </div>
      </Container>
    </section>
  );
}