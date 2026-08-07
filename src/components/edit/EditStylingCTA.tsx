"use client";

import Link from "next/link";

import Container from "@/components/ui/Container";

export default function EditStylingCTA() {
  return (
    <section
      id="styling"
      className="border-t border-(--border) py-40"
    >
      <Container>
        <div className="mx-auto max-w-4xl text-center">

          {/* Eyebrow */}

          <p
            className="mb-6 text-xs uppercase tracking-[0.4em] text-(--primary)"
          >
            Continue The Edit
          </p>

          {/* Heading */}

          <h2
            className="font-(--font-playfair) text-5xl leading-none md:text-7xl"          >
            Make The Look
            <br />
            Your Own
          </h2>

          {/* Description */}

          <p
            className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-(--muted)"
          >
            Every edit is designed to inspire—not copy.
            Build your own version, discover similar pieces,
            or work with us to create a wardrobe that feels
            uniquely yours.
          </p>

          {/* CTA Buttons */}

          <div
            className="mt-14 flex flex-col justify-center gap-4 sm:flex-row"
          >

            <Link
              href="/recreate"
              className="inline-flex items-center justify-center bg-(--primary) px-10 py-4 text-xs uppercase tracking-[0.3em] text-white transition-all duration-300 hover:opacity-90"
            >
              Recreate This Edit
            </Link>

            <Link
              href="/styling"
              className=" inline-flex items-center justify-center  border border-(--border)  px-10  py-4 text-xs uppercase tracking-[0.3em] transition-all  duration-300 hover:border-(--foreground)"
            >
              Book Styling
            </Link>

          </div>

          {/* Quote */}

          <div
            className="mx-auto mt-24 max-w-3xl border-t border-(--border)  pt-12"
          >

            <p
              className="font-(--font-playfair) text-2xl italic md:text-3xl"
            >
              "Style is not about following trends.
              It's about refining your own point of view."
            </p>

            <p
              className="mt-6 text-xs  uppercase  tracking-[0.35em] text-(--muted) "
            >
              — The Styled Edit
            </p>

          </div>

        </div>
      </Container>
    </section>
  );
}