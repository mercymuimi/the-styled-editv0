import { communityBenefits } from "@/data/community";

export default function CommunityBenefits() {
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
            Why Join?
          </p>

          <h2
            className="
              mt-4
              font-(--font-playfair)
              text-5xl
            "
          >
            A Community Built Around You
          </h2>

        </div>

        <div
          className="
            grid
            gap-8
            md:grid-cols-2
          "
        >

          {communityBenefits.map((benefit) => (

            <div
              key={benefit.title}
              className="
                rounded-4xl
                border
                border-(--border)
                bg-white
                p-10
                transition
                duration-300
                hover:-translate-y-2
                hover:shadow-xl
              "
            >

              <h3
                className="
                  font-(--font-playfair)
                  text-3xl
                "
              >
                {benefit.title}
              </h3>

              <p
                className="
                  mt-5
                  leading-8
                  text-(--muted)
                "
              >
                {benefit.description}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}
