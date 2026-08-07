"use client";

import Image from "next/image";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import FadeUp from "@/components/animations/FadeUp";

const experiences = [
  "Pop-Up Experiences",
  "Creative Meetups",
  "Styling Sessions",
  "Editorial Shoots",
];

export default function Community() {
  return (
    <section id="community" className="border-t border-(--border) py-32">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* CONTENT */}
          <div>
            <FadeUp>
              <span className="text-sm tracking-[0.35em] text-(--primary)">
                COMMUNITY
              </span>
            </FadeUp>

            <FadeUp>
              <h2 className="mt-6 font-(--font-playfair) text-5xl leading-none md:text-7xl">
                Fashion is better
                when shared.
              </h2>
            </FadeUp>

            <FadeUp>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-(--muted)">
                From pop-ups and styling experiences to creative gatherings
                and collaborations, The Styled Edit brings people together
                through a shared love of fashion, creativity and culture.
              </p>
            </FadeUp>

            <div className="mt-12 space-y-5">
              {experiences.map((item) => (
                <FadeUp key={item}>
                  <div className="flex items-center gap-4">
                    <div className="h-2 w-2 rounded-full bg-(--primary)" />
                    <span className="text-lg text-(--foreground)">{item}</span>
                  </div>
                </FadeUp>
              ))}
            </div>

            <FadeUp>
              <div className="mt-12">
                <Button
                  href="#newsletter"
                  className="rounded-none px-8 py-4 text-xs tracking-[0.2em] uppercase"
                >
                  Join The Community
                </Button>
              </div>
            </FadeUp>
          </div>

          {/* IMAGE */}
          <FadeUp>
            <div className="overflow-hidden border border-(--border) bg-white shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
              <Image
                src="/images/event1.jpg"
                alt="The Styled Edit Community"
                width={1200}
                height={1400}
                className="h-180 w-full object-cover"
              />
            </div>
          </FadeUp>
        </div>
      </Container>
    </section>
  );
}