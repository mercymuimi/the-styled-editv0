"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import FadeUp from "@/components/animations/FadeUp";

const stories = [
  {
    category: "STYLE",
    title: "Building A Timeless Wardrobe",
    image: "/images/journal1.jpg",
    href: "/journal/building-a-timeless-wardrobe",
  },
  {
    category: "CULTURE",
    title: "The New Generation Of Nairobi Creatives",
    image: "/images/journal2.jpg",
    href: "/journal/new-generation-nairobi-creatives",
  },
  {
    category: "LIFESTYLE",
    title: "Designing A More Intentional Life",
    image: "/images/journal3.jpg",
    href: "/journal/designing-a-more-intentional-life",
  },
];

const notes = [
  { title: "Nairobi Fashion Week Highlights", href: "/journal/nairobi-fashion-week-highlights" },
  { title: "Inside Our Latest Editorial Shoot", href: "/journal/latest-editorial-shoot" },
  { title: "The Future Of Sustainable Thrifting", href: "/journal/future-of-sustainable-thrifting" },
  { title: "Creative Spotlight: Emerging Stylists", href: "/journal/creative-spotlight-emerging-stylists" },
];

export default function Journal() {
  return (
    <section id="journal" className="border-t border-(--border) py-32">
      <Container>
        {/* HEADER */}
        <FadeUp>
          <SectionHeader
            eyebrow="THE JOURNAL"
            title="The conversations shaping modern style."
            description="Editorial stories, cultural observations and creative perspectives from The Styled Edit."
          />
        </FadeUp>

        {/* FEATURED STORY */}
        <FadeUp>
          <Link
            href="/journal"
            className="group mt-16 block overflow-hidden border border-(--border) bg-white shadow-[0_20px_60px_rgba(0,0,0,0.05)]"
          >
            <div className="grid lg:grid-cols-2">
              <div className="relative h-125 lg:h-162.5">
                <Image
                  src="/images/journal.jpg"
                  alt="Featured Editorial"
                  fill
                  sizes="50vw"
                  className="object-cover"
                />
              </div>

              <div className="flex flex-col justify-center p-10 lg:p-16">
                <span className="text-xs tracking-[0.35em] text-(--primary)">
                  FEATURED EDITORIAL
                </span>

                <h3 className="mt-6 font-(--font-playfair) text-4xl leading-tight md:text-5xl">
                  How Nairobi&apos;s New Creative
                  Class Is Redefining Style.
                </h3>

                <p className="mt-8 max-w-xl text-lg leading-relaxed text-(--muted)">
                  A closer look at the creators, stylists and cultural
                  innovators shaping the next chapter of contemporary fashion.
                </p>

                <span className="mt-10 flex w-fit items-center gap-2 border-b border-current pb-1 text-sm tracking-[0.2em] transition-opacity group-hover:opacity-70">
                  READ STORY
                  <ArrowRight size={14} />
                </span>
              </div>
            </div>
          </Link>
        </FadeUp>

        {/* STORY GRID */}
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {stories.map((story) => (
            <FadeUp key={story.title}>
              <Link
                href={story.href}
                className="group block overflow-hidden border border-(--border) bg-white transition-colors duration-300 hover:border-(--primary)"
              >
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={story.image}
                    alt={story.title}
                    fill
                    sizes="33vw"
                    className="object-cover"
                  />
                </div>

                <div className="p-7">
                  <span className="text-xs tracking-[0.3em] text-(--primary)">
                    {story.category}
                  </span>
                  <h3 className="mt-4 font-(--font-playfair) text-2xl leading-snug">
                    {story.title}
                  </h3>
                </div>
              </Link>
            </FadeUp>
          ))}
        </div>

        {/* CULTURE NOTES */}
        <FadeUp>
          <div className="mt-20 border border-(--border) bg-white p-10">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
              <div>
                <span className="text-xs tracking-[0.35em] text-(--primary)">
                  CULTURE NOTES
                </span>
                <h3 className="mt-4 font-(--font-playfair) text-3xl">
                  What&apos;s happening now.
                </h3>
              </div>

              <div className="grid gap-4 lg:min-w-125">
                {notes.map((note) => (
                  <Link
                    key={note.title}
                    href={note.href}
                    className="group flex items-center justify-between border-b border-(--border) pb-4"
                  >
                    <span>{note.title}</span>
                    <span className="text-sm text-(--muted) transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </FadeUp>
      </Container>
    </section>
  );
}