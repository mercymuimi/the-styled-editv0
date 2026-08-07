"use client";

import Image from "next/image";
import { Edit } from "@/types/edit";
import Container from "@/components/ui/Container";

export default function EditBehind({
  edit,
}: {
  edit: Edit;
}) {
  return (
    <section
      id="behind"
      className="border-t border-(--border) py-32"
    >
      <Container>
        <div className="mx-auto max-w-7xl">

          {/* THE CONCEPT */}

          <div className="grid gap-12 lg:grid-cols-2 lg:items-end">

            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.35em] text-(--primary)">
                The Concept
              </p>

              <h2 className="font-(--font-playfair) text-5xl leading-none md:text-7xl">
                Style as a form
                <br />
                of self-expression.
              </h2>
            </div>

            <div>
              <p className="max-w-xl text-lg leading-relaxed text-(--muted)">
                {edit.story}
              </p>
            </div>

          </div>

          {/* MOODBOARD IMAGE */}

          <div className="mt-24 overflow-hidden rounded-4xl">
            <Image
              src={edit.cover}
              alt={edit.title}
              width={1800}
              height={1200}
              className="h-full w-full object-cover"
            />
          </div>

          {/* PRINCIPLES */}

          <div className="mt-24">

            <p className="mb-12 text-xs uppercase tracking-[0.35em] text-(--primary)">
              What We Wanted To Capture
            </p>

            <div className="grid gap-12 md:grid-cols-3">

              <div>
                <span className="text-sm text-(--muted)">
                  01
                </span>

                <h3 className="mt-4 text-4xl font-light">
                  Confidence
                </h3>

                <p className="mt-4 leading-relaxed text-(--muted)">
                  Style that feels effortless rather
                  than forced.
                </p>
              </div>

              <div>
                <span className="text-sm text-(--muted)">
                  02
                </span>

                <h3 className="mt-4 text-4xl font-light">
                  Creativity
                </h3>

                <p className="mt-4 leading-relaxed text-(--muted)">
                  Unexpected combinations that
                  still feel timeless.
                </p>
              </div>

              <div>
                <span className="text-sm text-(--muted)">
                  03
                </span>

                <h3 className="mt-4 text-4xl font-light">
                  Individuality
                </h3>

                <p className="mt-4 leading-relaxed text-(--muted)">
                  Looks that can be adapted to
                  reflect personal identity.
                </p>
              </div>

            </div>

          </div>

          {/* EDITOR NOTE */}

          <div className="mx-auto mt-32 max-w-3xl border-t border-(--border) pt-16">

            <p className="mb-4 text-xs uppercase tracking-[0.35em] text-(--primary)">
              Editor's Reflection
            </p>

            <p className="font-(--font-playfair) text-3xl leading-relaxed md:text-4xl">
              The most interesting people are rarely
              dressed perfectly. They are dressed
              honestly.
            </p>

            <p className="mt-8 text-lg leading-relaxed text-(--muted)">
              The Creative Edit celebrates personal
              style, curiosity and self-expression
              over trends.
            </p>

          </div>

        </div>
      </Container>
    </section>
  );
}