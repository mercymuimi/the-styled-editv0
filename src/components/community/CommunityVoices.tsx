import { communityTestimonials } from "@/data/community";

export default function CommunityVoices() {
  return (
    <section className="pb-32">

      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">

          <p
            className="
              text-xs
              uppercase
              tracking-[0.35em]
              text-(--primary)
            "
          >
            Community Voices
          </p>

          <h2
            className="
              mt-4
              font-(--font-playfair)
              text-5xl
            "
          >
            What Our Members Say
          </h2>

        </div>

        <div
          className="
            grid
            gap-8
            md:grid-cols-3
          "
        >

          {communityTestimonials.map((person) => (

            <article
              key={person.name}
              className="
                rounded-4xl
                border
                border-(--border)
                bg-white
                p-10
              "
            >

              <p
                className="
                  text-lg
                  italic
                  leading-9
                "
              >
                "{person.quote}"
              </p>

              <div className="mt-10">

                <h3
                  className="
                    font-(--font-playfair)
                    text-2xl
                  "
                >
                  {person.name}
                </h3>

                <p className="mt-2 text-(--muted)">
                  {person.role}
                </p>

              </div>

            </article>

          ))}

        </div>

      </div>

    </section>
  );
}
