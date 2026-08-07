import Link from "next/link";

import { LifestyleEvent } from "@/types/lifestyle";

type Props = {
  events: LifestyleEvent[];
};

export default function UpcomingEvent({
  events,
}: Props) {
  return (
    <section className="pb-32">

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
            Calendar
          </p>

          <h2
            className="
              mt-4
              font-(--font-playfair)
              text-5xl
            "
          >
            Upcoming Experiences
          </h2>

        </div>

        <div className="divide-y divide-(--border)">

          {events.map((event) => (

            <Link
              key={event.slug}
              href={`/lifestyle/${event.slug}`}
              className="
                group
                grid
                gap-8
                py-10
                transition-colors
                hover:bg-(--surface)
                md:grid-cols-[160px_1fr_auto]
                md:px-6
              "
            >

              {/* DATE */}

              <div>

                <p
                  className="
                    text-sm
                    uppercase
                    tracking-[0.25em]
                    text-(--primary)
                  "
                >
                  {event.date}
                </p>

              </div>

              {/* TITLE */}

              <div>

                <p
                  className="
                    text-xs
                    uppercase
                    tracking-[0.25em]
                    text-(--muted)
                  "
                >
                  {event.category}
                </p>

                <h3
                  className="
                    mt-3
                    font-(--font-playfair)
                    text-4xl
                    transition-transform
                    duration-300
                    group-hover:translate-x-2
                  "
                >
                  {event.title}
                </h3>

                <p
                  className="
                    mt-4
                    max-w-xl
                    leading-8
                    text-(--muted)
                  "
                >
                  {event.excerpt}
                </p>

              </div>

              {/* LOCATION */}

              <div
                className="
                  flex
                  items-center
                  justify-start
                  text-sm
                  uppercase
                  tracking-[0.2em]
                  text-(--muted)
                  md:justify-end
                "
              >
                {event.location}
              </div>

            </Link>

          ))}

        </div>

      </div>

    </section>
  );
}
