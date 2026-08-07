const stats = [
  {
    number: "500+",
    label: "Community Members",
  },
  {
    number: "15+",
    label: "Events Planned",
  },
  {
    number: "100+",
    label: "Women Styled",
  },
  {
    number: "Nairobi",
    label: "Growing Community",
  },
];

export default function InsideCommunity() {
  return (
    <section className="pb-32">

      <div className="mx-auto max-w-7xl px-6">

        <div className="max-w-3xl">

          <p
            className="
              text-xs
              uppercase
              tracking-[0.35em]
              text-(--primary)
            "
          >
            Inside The Community
          </p>

          <h2
            className="
              mt-4
              font-(--font-playfair)
              text-5xl
            "
          >
            Fashion Is Better Together.
          </h2>

          <p
            className="
              mt-8
              text-lg
              leading-9
              text-(--muted)
            "
          >
            We're creating a space where women connect,
            grow their confidence, discover personal style,
            and build meaningful friendships through fashion.
          </p>

        </div>

        <div
          className="
            mt-20
            grid
            gap-8
            md:grid-cols-2
            lg:grid-cols-4
          "
        >

          {stats.map((stat) => (

            <div
              key={stat.label}
              className="
                rounded-4xl
                border
                border-(--border)
                bg-white
                p-10
                text-center
              "
            >

              <h3
                className="
                  font-(--font-playfair)
                  text-5xl
                "
              >
                {stat.number}
              </h3>

              <p
                className="
                  mt-4
                  text-sm
                  uppercase
                  tracking-[0.25em]
                  text-(--muted)
                "
              >
                {stat.label}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}