"use client";

import Image from "next/image";
import Link from "next/link";

import Container from "@/components/ui/Container";
import FadeUp from "@/components/animations/FadeUp";

export default function FeaturedCollection() {
return ( <section className="border-t border-(--border) py-24 md:py-32"> <Container>
{/* SECTION INTRO */} <FadeUp> <div className="mb-16 flex items-center justify-between border-b border-(--border) pb-5"> <span className="text-[10px] tracking-[0.32em] uppercase text-(--primary)">
The Edit </span>

```
        <span className="text-[10px] tracking-[0.28em] uppercase text-(--muted)">
          Edition 01
        </span>
      </div>
    </FadeUp>

    {/* FEATURED EDITORIAL */}
    <div className="grid gap-12 lg:grid-cols-[1.35fr_0.65fr] lg:gap-20">
      {/* IMAGE */}
      <FadeUp>
        <div>
          <Link
            href="/collections"
            className="group block overflow-hidden"
          >
            <div className="relative aspect-4/5 overflow-hidden bg-(--surface)">
              <Image
                src="/images/extra13.jpg"
                alt="The Summer Edit"
                fill
                priority
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
              />

              {/* subtle image overlay */}
              <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/3" />
            </div>
          </Link>

          {/* IMAGE CAPTION */}
          <div className="mt-4 flex items-center justify-between border-t border-(--border) pt-3">
            <span className="text-[9px] tracking-[0.28em] uppercase text-(--muted)">
              The Styled Edit
            </span>

            <span className="text-[9px] tracking-[0.28em] uppercase text-(--muted)">
              Edition 01
            </span>
          </div>
        </div>
      </FadeUp>

      {/* CONTENT */}
      <FadeUp>
        <div className="flex h-full flex-col justify-center lg:pb-12">
          <span className="text-[10px] tracking-[0.32em] uppercase text-(--primary)">
            Featured Collection
          </span>

          <h2 className="mt-6 max-w-lg font-(--font-playfair) text-5xl leading-[0.95] tracking-tight md:text-6xl xl:text-7xl">
            The Summer
            <br />
            Edit
          </h2>

          <p className="mt-8 max-w-md text-base leading-7 text-(--muted)">
            A considered selection of thrifted pieces chosen for
            character, versatility and the way they make you feel.
          </p>

          {/* META */}
          <div className="mt-12 grid max-w-md grid-cols-2 border-y border-(--border)">
            <div className="py-5">
              <span className="block text-[9px] tracking-[0.28em] uppercase text-(--muted)">
                Collection
              </span>

              <span className="mt-2 block text-sm">
                Edition 01
              </span>
            </div>

            <div className="border-l border-(--border) py-5 pl-6">
              <span className="block text-[9px] tracking-[0.28em] uppercase text-(--muted)">
                Available
              </span>

              <span className="mt-2 block text-sm">
                Online & Nairobi
              </span>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-10">
            <Link
              href="/collections"
              className="group inline-flex items-center gap-4 border-b border-(--foreground) pb-2 text-[10px] tracking-[0.3em] uppercase transition-opacity duration-300 hover:opacity-60"
            >
              Explore the Edit

              <span className="text-sm transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </div>
      </FadeUp>
    </div>
  </Container>
</section>

);
}
