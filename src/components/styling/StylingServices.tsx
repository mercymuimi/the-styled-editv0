export default function StylingServices() {
  const services = [
    {
      title: "Wardrobe Edit",
      description:
        "Review your wardrobe, identify gaps and create outfits from pieces you already own.",
    },

    {
      title: "Personal Shopping",
      description:
        "Curated shopping support based on your style goals, budget and lifestyle.",
    },

    {
      title: "Event Styling",
      description:
        "Looks for birthdays, weddings, photoshoots and special occasions.",
    },
  ];

  return (
    <section
      id="services"
      className="border-t border-(--border) py-32"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-20 max-w-3xl">

          <p
            className="
              mb-4
              text-xs
              uppercase
              tracking-[0.35em]
              text-(--primary)
            "
          >
            Services
          </p>

          <h2
            className="
              font-(--font-playfair)
              text-5xl
              md:text-6xl
            "
          >
            Styling Designed
            For Real Life
          </h2>

        </div>

        <div
          className="
            grid
            gap-8
            md:grid-cols-3
          "
        >
          {services.map((service) => (
            <div
              key={service.title}
              className="
                rounded-4xl
                border
                border-(--border)
                bg-white
                p-10
              "
            >
              <h3
                className="
                  font-(--font-playfair)
                  text-3xl
                "
              >
                {service.title}
              </h3>

              <p
                className="
                  mt-6
                  leading-relaxed
                  text-(--muted)
                "
              >
                {service.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
