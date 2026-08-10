"use client";

import Image from "next/image";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import FadeUp from "@/components/animations/FadeUp";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-(--background) py-20 md:py-28 lg:py-32">
      {/* Subtle background glow */}
      <div
        className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-(--primary)/5 blur-3xl"
      />

      <Container>
        <div className="grid items-center gap-20 lg:grid-cols-[1.05fr_0.95fr]">
          {/* LEFT CONTENT */}
          <div>
            {/* Editorial kicker */}
            <FadeUp>
              <div className="flex items-center gap-4">
                <span className="h-px w-10 bg-(--primary)" />

                <span className="text-xs uppercase tracking-[0.35em] text-(--primary)">
                  A Nairobi Fashion House
                </span>
              </div>
            </FadeUp>

            {/* Main heading */}
            <FadeUp>
              <h1
                className="mt-8 font-(--font-playfair) text-6xl leading-[0.9] tracking-[-0.04em] md:text-7xl xl:text-[7rem]"
              >
                Fashion.
                <br />
                Culture.
                <br />
                Lifestyle.
              </h1>
            </FadeUp>

            {/* Description */}
            <FadeUp>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-(--muted)">
                A curated edit of thrifted fashion, personal styling and
                modern living — for a generation rewriting what secondhand
                means, one piece at a time.
              </p>
            </FadeUp>

            {/* CTA */}
            <FadeUp>
              <div className="mt-12 flex flex-wrap gap-4">
                <Button
                  href="/edit"
                  className="rounded-none px-8 py-4 text-xs uppercase tracking-[0.2em]"
                >
                  Explore The Edit
                </Button>

                <Button
                  href="#newsletter"
                  variant="secondary"
                  className="rounded-none border border-(--foreground) px-8 py-4 text-xs uppercase tracking-[0.2em]"
                >
                  Join our community
                </Button>
              </div>
            </FadeUp>

            {/* Editorial metadata */}
            <FadeUp>
              <div
                className="mt-14 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-(--foreground)/10 pt-6 text-[9px] uppercase tracking-[0.25em] text-(--muted)"
              >
                <span>Est. 2026</span>

                <span className="text-(--primary)">—</span>

                <span>Nairobi, Kenya</span>

                <span className="text-(--primary)">—</span>

                <span>A Global Community</span>
              </div>
            </FadeUp>
          </div>

          {/* RIGHT IMAGE */}
          <FadeUp>
            <div className="group relative mx-auto w-full max-w-140">
              {/* Soft shadow / glow */}
              <div
                className="absolute inset-4 rounded-lg bg-(--primary)/10 blur-2xl"
              />

              <div className="relative">
                {/* Main image */}
                <div
                  className="relative z-0 overflow-hidden border border-(--border) bg-white shadow-[0_30px_80px_rgba(0,0,0,0.08)] transition-all duration-700 group-hover:-translate-y-2"
                >
                  <Image
                    src="/images/hero1.jpg"
                    alt="The Styled Edit — Fashion editorial"
                    width={1200}
                    height={1500}
                    priority
                    className="h-140 w-full object-cover transition-transform duration-2000 group-hover:scale-105"
                  />
                </div>

                {/* Secondary image */}
                <div
                  className="absolute -bottom-10 -left-10 z-10 w-2/5 overflow-hidden border-4 border-(--background) bg-white shadow-[0_20px_50px_rgba(0,0,0,0.12)] transition-all duration-700 group-hover:-translate-y-3"
                >
                  <Image
                    src="/images/hero2.jpg"
                    alt="The Styled Edit — Styling detail"
                    width={700}
                    height={900}
                    className="h-60 w-full object-cover"
                  />
                </div>

                {/* Editorial hangtag */}
                <div
                  className="absolute -top-6 right-6 z-20 -rotate-6 select-none"
                >
                  <div
                    className="relative flex flex-col items-center gap-1 border border-(--foreground)/20 bg-(--background) px-5 py-4 shadow-md"
                  >
                    {/* String loop */}
                    <span
                      className="absolute -top-2.5 h-4 w-4 rounded-full border-2 border-(--foreground)/30"
                    />

                    <span
                      className="mt-2 font-(--font-playfair) text-lg leading-none"
                    >
                      CURATED
                    </span>

                    <span
                      className="text-[10px] uppercase tracking-[0.25em] text-(--muted)"
                    >
                      No. 001
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </Container>
    </section>
  );
}