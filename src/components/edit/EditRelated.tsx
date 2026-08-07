import Link from "next/link";
import Image from "next/image";

import Container from "@/components/ui/Container";
import { edits } from "@/data/edits";

type Props = {
  currentSlug: string;
};

export default function EditRelated({
  currentSlug,
}: Props) {
  const relatedEdits = edits
    .filter((edit) => edit.slug !== currentSlug)
    .slice(0, 3);

  return (
    <section
      className="
        border-t
        border-(--border)
        py-32
      "
    >
      <Container>

        <div className="mb-20">

          <p
            className="
              mb-4
              text-xs
              uppercase
              tracking-[0.35em]
              text-(--primary)
            "
          >
            Continue Reading
          </p>

          <h2
            className="
              font-(--font-playfair)
              text-5xl
              md:text-6xl
            "
          >
            More From The Edit
          </h2>

        </div>

        <div
          className="
            grid
            gap-10
            md:grid-cols-3
          "
        >

          {relatedEdits.map((edit) => (

            <Link
              key={edit.slug}
              href={`/edit/${edit.slug}`}
              className="group block"
            >

              <div
                className="
                  relative
                  aspect-4/5
                  overflow-hidden
                "
              >

                <Image
                  src={edit.cover}
                  alt={edit.title}
                  fill
                  className="
                    object-cover
                    transition-all
                    duration-700
                    group-hover:scale-105
                  "
                />

              </div>

              <div className="mt-6">

                <p
                  className="
                    mb-3
                    text-xs
                    uppercase
                    tracking-[0.3em]
                    text-(--muted)
                  "
                >
                  Vol. {edit.volume}
                </p>

                <h3
                  className="
                    mb-3
                    font-(--font-playfair)
                    text-3xl
                  "
                >
                  {edit.title}
                </h3>

                <p
                  className="
                    leading-relaxed
                    text-(--muted)
                  "
                >
                  {edit.subtitle}
                </p>

              </div>

            </Link>

          ))}

        </div>

      </Container>
    </section>
  );
}