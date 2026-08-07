import Image from "next/image";

import { Edit } from "@/types/edit";

type Props = {
  edit: Edit;
};

export default function EditHero({
  edit,
}: Props) {
  return (
    <section className="pt-44 pb-24">

      <div className="mx-auto max-w-7xl px-6">

        {/* Volume */}

        <p
          className="
            mb-6
            text-xs
            uppercase
            tracking-[0.4em]
            text-(--primary)
          "
        >
          Vol. {edit.volume}
        </p>

        {/* Title */}

        <h1
          className="
            max-w-5xl
            font-(--font-playfair)
            text-6xl
            leading-none
            md:text-8xl
          "
        >
          {edit.title}
        </h1>

        {/* Editorial Statement */}

        <h2
          className="
            mt-10
            max-w-4xl
            text-3xl
            leading-tight
            md:text-5xl
          "
        >
          For the ones creating,
          building and becoming.
        </h2>

        {/* Subtitle */}

        <p
          className="
            mt-8
            max-w-2xl
            text-lg
            leading-relaxed
            text-(--muted)
          "
        >
          {edit.subtitle}
        </p>

        {/* Cover Image */}

        <div
          className="
            relative
            mt-20
            aspect-video
            overflow-hidden
            rounded-[40px]
          "
        >
          <Image
            src={edit.cover}
            alt={edit.title}
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Editorial Details */}

        <div
          className="
            mt-10
            border-t
            border-(--border)
            pt-8
          "
        >
          <div
            className="
              grid
              gap-8
              md:grid-cols-3
            "
          >
            <div>
              <p
                className="
                  mb-2
                  text-xs
                  uppercase
                  tracking-[0.3em]
                  text-(--muted)
                "
              >
                Creative Direction
              </p>

              <p>The Styled Edit</p>
            </div>

            <div>
              <p
                className="
                  mb-2
                  text-xs
                  uppercase
                  tracking-[0.3em]
                  text-(--muted)
                "
              >
                Focus
              </p>

              <p>Modern Creative</p>
            </div>

            <div>
              <p
                className="
                  mb-2
                  text-xs
                  uppercase
                  tracking-[0.3em]
                  text-(--muted)
                "
              >
                Year
              </p>

              <p>2025</p>
            </div>
          </div>
        </div>

      </div>

    </section>
  );
}