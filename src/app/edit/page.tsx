import Image from "next/image";
import Link from "next/link";

import { edits } from "@/data/edits";

export default function EditArchivePage() {
  const featuredEdit = edits[0];
  const otherEdits = edits.slice(1);

  return (
    <main className="pb-24 pt-32">

      {/* HERO */}

      <section className="px-6">
        <div className="mx-auto max-w-7xl">

          <div className="max-w-3xl">

            <p
              className="
                mb-4
                text-sm
                uppercase
                tracking-[0.35em]
                text-(--primary)
              "
            >
              The Styled Edit
            </p>

            <h1
              className="
                font-(--font-playfair)
                text-6xl
                md:text-8xl
              "
            >
              The Edit
            </h1>

            <p
              className="
                mt-6
                max-w-xl
                text-lg
                leading-relaxed
                text-(--muted)
              "
            >
              Editorial collections exploring style,
              identity, culture and modern living.
            </p>

          </div>

        </div>
      </section>

      {/* FEATURED EDIT */}

      <section className="mt-24 px-6">
        <div className="mx-auto max-w-7xl">

          <Link
            href={`/edit/${featuredEdit.slug}`}
            className="
              group
              block
              overflow-hidden
              rounded-[40px]
              bg-white
              shadow-(--shadow-soft)
            "
          >

            <div className="grid lg:grid-cols-2">

              <div className="relative h-125">

                <Image
                  src={featuredEdit.cover}
                  alt={featuredEdit.title}
                  fill
                  className="
                    object-cover
                    transition
                    duration-700
                    group-hover:scale-105
                  "
                />

              </div>

              <div
                className="
                  flex
                  flex-col
                  justify-center
                  p-10
                  md:p-16
                "
              >

                <p
                  className="
                    text-sm
                    uppercase
                    tracking-[0.3em]
                    text-(--primary)
                  "
                >
                  Vol. {featuredEdit.volume}
                </p>

                <h2
                  className="
                    mt-6
                    font-(--font-playfair)
                    text-5xl
                  "
                >
                  {featuredEdit.title}
                </h2>

                <p
                  className="
                    mt-6
                    text-lg
                    leading-relaxed
                    text-(--muted)
                  "
                >
                  {featuredEdit.subtitle}
                </p>

                <span
                  className="
                    mt-8
                    text-sm
                    uppercase
                    tracking-[0.2em]
                  "
                >
                  Explore Edition →
                </span>

              </div>

            </div>

          </Link>

        </div>
      </section>

      {/* PREVIOUS EDITIONS */}

      {otherEdits.length > 0 && (
        <section className="mt-24 px-6">
          <div className="mx-auto max-w-7xl">

            <h3
              className="
                mb-10
                text-sm
                uppercase
                tracking-[0.3em]
                text-(--muted)
              "
            >
              Previous Editions
            </h3>

            <div className="grid gap-8 md:grid-cols-2">

              {otherEdits.map((edit) => (
                <Link
                  key={edit.slug}
                  href={`/edit/${edit.slug}`}
                  className="
                    group
                    overflow-hidden
                    rounded-4xl
                    border
                    border-(--border)
                    bg-white
                    transition-all
                    duration-500
                    hover:-translate-y-1
                    hover:shadow-(--shadow-soft)
                  "
                >

                  <div className="relative h-96 overflow-hidden">

                    <Image
                      src={edit.cover}
                      alt={edit.title}
                      fill
                      className="
                        object-cover
                        transition
                        duration-700
                        group-hover:scale-105
                      "
                    />

                  </div>

                  <div className="p-8">

                    <p
                      className="
                        text-xs
                        uppercase
                        tracking-[0.3em]
                        text-(--primary)
                      "
                    >
                      Vol. {edit.volume}
                    </p>

                    <h4
                      className="
                        mt-4
                        font-(--font-playfair)
                        text-3xl
                      "
                    >
                      {edit.title}
                    </h4>

                    <p
                      className="
                        mt-4
                        leading-relaxed
                        text-(--muted)
                      "
                    >
                      {edit.subtitle}
                    </p>

                    <span
                      className="
                        mt-6
                        inline-block
                        text-xs
                        uppercase
                        tracking-[0.25em]
                        text-(--primary)
                      "
                    >
                      Explore Edition →
                    </span>

                  </div>

                </Link>
              ))}

            </div>

          </div>
        </section>
      )}

    </main>
  );
}