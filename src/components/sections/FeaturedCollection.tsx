"use client";

import Image from "next/image";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import FadeUp from "@/components/animations/FadeUp";

export default function FeaturedCollection() {
  return (
    <section id="collection" className="border-t border-(--border) py-32">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* IMAGE */}
          <FadeUp>
            <div className="relative">
              <div className="overflow-hidden border border-(--border) bg-white shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
                <Image
                  src="/images/collection1.jpg"
                  alt="The Summer Edit"
                  width={1200}
                  height={1400}
                  className="h-180 w-full object-cover"
                />
              </div>

              {/* Hangtag — same device as hero, manifesto, logo */}
              <div className="absolute -top-5 left-8 -rotate-6 select-none">
                <div className="relative flex flex-col items-center gap-1 border border-(--foreground)/20 bg-(--background) px-5 py-4 shadow-md">
                  <span className="absolute -top-2.5 h-4 w-4 rounded-full border-2 border-(--foreground)/30" />
                  <span className="mt-2 font-(--font-playfair) text-sm italic">
                    Edition
                  </span>
                  <span className="text-[10px] tracking-[0.2em] uppercase text-(--muted)">
                    No. 01
                  </span>
                </div>
              </div>
            </div>
          </FadeUp>

          {/* CONTENT */}
          <div>
            <FadeUp>
              <span className="text-sm tracking-[0.35em] text-(--primary)">
                FEATURED COLLECTION
              </span>
            </FadeUp>

            <FadeUp>
              <h2 className="mt-6 font-(--font-playfair) text-5xl leading-none md:text-7xl">
                The Summer Edit
              </h2>
            </FadeUp>

            <FadeUp>
              <div className="mt-6 h-px w-24 bg-(--primary)" />
            </FadeUp>

            <FadeUp>
              <p className="mt-8 max-w-xl text-xl leading-relaxed text-(--muted)">
                A curated collection of thrifted fashion selected for
                individuality, confidence and modern self-expression.
              </p>
            </FadeUp>

            <FadeUp>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-(--muted)">
                Each piece is intentionally sourced and styled to celebrate
                personality over trends and authenticity over uniformity.
              </p>
            </FadeUp>

            <FadeUp>
              <div className="mt-10">
                <Button
                  href="/collections"
                  className="rounded-none px-8 py-4 text-xs tracking-[0.2em] uppercase"
                >
                  Explore Collection
                </Button>
              </div>
            </FadeUp>
          </div>
        </div>
      </Container>
    </section>
  );
}