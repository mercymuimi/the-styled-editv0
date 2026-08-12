"use client";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import FadeUp from "@/components/animations/FadeUp";
import HeroLookCarousel from "@/components/sections/HeroLookCarousel";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-12 sm:py-16 lg:py-12">
      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">

          {/* LEFT CONTENT */}
          <div className="flex flex-col justify-between lg:h-full">
            <div>
              {/* EDITORIAL KICKER */}
              <FadeUp>
                <div className="flex items-center gap-4">
                  <span className="h-px w-10 bg-(--primary)" />

                  <span className="text-xs uppercase tracking-[0.35em] text-(--primary)">
                    A Nairobi Fashion House
                  </span>
                </div>
              </FadeUp>

              {/* MAIN HEADING — fluid clamp size, no breakpoint jumps */}
              <FadeUp>
                <h1 className="tse-hero-heading mt-6 sm:mt-8">
                  Fashion.
                  <br />
                  Culture.
                  <br />
                  Lifestyle.
                </h1>
              </FadeUp>

              {/* DESCRIPTION */}
              <FadeUp>
                <p className="mt-8 max-w-lg text-base leading-[1.8] text-(--muted) md:mt-10 md:text-lg">
                  A curated edit of thrifted fashion, personal styling and
                  modern living — for a generation rewriting what secondhand
                  means, one piece at a time.
                </p>
              </FadeUp>

              {/* CTA — stacks full width on mobile, row from sm up */}
              <FadeUp>
                <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                  <Button
                    href="/edit"
                    className="rounded-none px-8 py-4 text-center text-xs uppercase tracking-[0.2em]"
                  >
                    Explore The Edit
                  </Button>

                  <Button
                    href="/community"
                    variant="secondary"
                    className="rounded-none border border-(--foreground) px-8 py-4 text-center text-xs uppercase tracking-[0.2em]"
                  >
                    Join our community
                  </Button>
                </div>
              </FadeUp>
            </div>

            {/* EDITORIAL METADATA — pinned to bottom, aligns with base of image */}
            <FadeUp>
              <div className="mt-14 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-(--foreground)/10 pt-6 text-[9px] uppercase tracking-[0.25em] text-(--muted)">
                <span>Est. 2026</span>

                <span className="text-(--primary)">—</span>

                <span>Nairobi, Kenya</span>

                <span className="text-(--accent)">—</span>

                <span>A Global Community</span>
              </div>
            </FadeUp>
          </div>

          {/* RIGHT — NAVIGATABLE LOOKS */}
          <FadeUp>
            <HeroLookCarousel />
          </FadeUp>

        </div>
      </Container>
    </section>
  );
}