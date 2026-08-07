import Image from "next/image";
import Link from "next/link";

import { LifestyleEvent } from "@/types/lifestyle";

type Props = {
  event: LifestyleEvent;
};

export default function FeaturedEvents({
  event,
}: Props) {
  return (
    <section
      id="experiences"
      className="pb-32"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16">

          <p
            className="
              text-xs
              uppercase
              tracking-[0.35em]
              text-(--primary)
            "
          >
            Featured Experience
          </p>

          <h2
            className="
              mt-4
              font-(--font-playfair)
              text-5xl
            "
          >
            Upcoming Highlight
          </h2>

        </div>

        <div
          className="
            grid
            items-center
            gap-16
            lg:grid-cols-2
          "
        >

          {/* IMAGE */}

          <div className="relative aspect-4/5 overflow-hidden rounded-4xl">

            <Image
              src={event.cover}
              alt={event.title}
              fill
              className="object-cover"
            />

          </div>

          {/* CONTENT */}

          <div>

            <p
              className="
                text-xs
                uppercase
                tracking-[0.3em]
                text-(--primary)
              "
            >
              {event.category}
            </p>

            <h3
              className="
                mt-4
                font-(--font-playfair)
                text-6xl
                leading-tight
              "
            >
              {event.title}
            </h3>

            <div
              className="
                mt-8
                flex
                gap-8
                text-sm
                uppercase
                tracking-[0.15em]
                text-(--muted)
              "
            >
              <span>{event.date}</span>
              <span>{event.location}</span>
            </div>

            <p
              className="
                mt-8
                max-w-xl
                text-lg
                leading-9
                text-(--muted)
              "
            >
              {event.excerpt}
            </p>

            <div className="mt-12 flex flex-wrap gap-5">

              <Link
                href={`/lifestyle/${event.slug}`}
                className="
                  rounded-full
                  bg-(--primary)
                  px-8
                  py-4
                  text-sm
                  uppercase
                  tracking-[0.25em]
                  text-white
                "
              >
                Read More
              </Link>

              <Link
                href="https://chat.whatsapp.com/DZGoBCqjN2yF5Fdef3DRRm"
                target="_blank"
                className="
                  rounded-full
                  border
                  border-(--border)
                  px-8
                  py-4
                  text-sm
                  uppercase
                  tracking-[0.25em]
                "
              >
                Reserve Spot
              </Link>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
