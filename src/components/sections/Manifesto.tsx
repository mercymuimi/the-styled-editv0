"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDown } from "lucide-react";

import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import FadeUp from "@/components/animations/FadeUp";

export default function Manifesto() {
  return (
    <section id="manifesto" className="relative border-t border-(--border) py-32">
      <Container>
        <div className="grid items-center gap-24 lg:grid-cols-2">
          {/* IMAGE */}
          <FadeUp>
            <div className="relative">
              <div className="overflow-hidden border border-(--border) bg-white shadow-[0_30px_80px_rgba(0,0,0,0.08)]">
                <Image
                  src="/images/philosophy2.jpg"
                  alt="The Styled Edit Manifesto"
                  width={1200}
                  height={1400}
                  className="h-180 w-full object-cover"
                />
              </div>

              {/* Hangtag — same device as hero + logo */}
              <div className="absolute -top-5 right-8 -rotate-6 select-none">
                <div className="relative flex flex-col items-center gap-1 border border-(--foreground)/20 bg-(--background) px-5 py-4 shadow-md">
                  <span className="absolute -top-2.5 h-4 w-4 rounded-full border-2 border-(--foreground)/30" />
                  <span className="mt-2 text-[10px] tracking-[0.2em] uppercase text-(--muted)">
                    Style
                  </span>
                  <span className="text-[10px] tracking-[0.2em] uppercase text-(--muted)">
                    Culture
                  </span>
                  <span className="text-[10px] tracking-[0.2em] uppercase text-(--muted)">
                    Identity
                  </span>
                </div>
              </div>
            </div>
          </FadeUp>

          {/* CONTENT */}
          <div>
            <FadeUp>
              <SectionHeader eyebrow="The Manifesto" title="More than what you wear." />
            </FadeUp>

            <FadeUp>
              <div className="mt-8 h-px w-24 bg-(--primary)" />
            </FadeUp>

            <FadeUp>
              <p className="mt-8 text-xl leading-relaxed text-(--muted)">
                We believe style is a dialogue between what's been worn and
                what's next — a curated editorial house where identity,
                craftsmanship and Nairobi's creative pulse come together.
              </p>
            </FadeUp>

            <FadeUp>
              <p className="mt-6 text-lg leading-relaxed text-(--muted)">
                Through fashion, culture and community, we're building a
                modern editorial house where creativity, individuality and
                connection come together — one curated piece at a time.
              </p>
            </FadeUp>

            {/* Points down to the House section instead of repeating its content */}
            <FadeUp>
              <Link
                href="#house"
                className="group mt-10 inline-flex items-center gap-2 text-xs tracking-[0.25em] uppercase text-(--foreground)"
              >
                See how we do it
                <ArrowDown
                  size={14}
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