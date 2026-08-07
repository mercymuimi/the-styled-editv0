export default function StylingAudience() {
  const audiences = [
    {
      title: "Professionals",
      description:
        "Build a wardrobe that feels polished, versatile and aligned with your career goals.",
    },

    {
      title: "Content Creators",
      description:
        "Develop a signature style that strengthens your personal brand and online presence.",
    },

    {
      title: "Event Guests",
      description:
        "Find the perfect look for weddings, birthdays, photoshoots and special occasions.",
    },

    {
      title: "Wardrobe Refresh",
      description:
        "Rediscover your style and build confidence through intentional dressing.",
    },
  ];

  return (
    <section className="border-t border-(--border) py-32">
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
            Who It's For
          </p>

          <h2
            className="
              font-(--font-playfair)
              text-5xl
              md:text-6xl
            "
          >
            Styling For
            Every Season
            Of Life
          </h2>

          <p
            className="
              mt-6
              text-lg
              leading-relaxed
              text-(--muted)
            "
          >
            Whether you're building confidence,
            preparing for a milestone event or
            refining your everyday wardrobe,
            styling should work for your life.
          </p>

        </div>

        <div
          className="
            grid
            gap-8
            md:grid-cols-2
          "
        >
          {audiences.map((item) => (
            <div
              key={item.title}
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
                {item.title}
              </h3>

              <p
                className="
                  mt-5
                  leading-relaxed
                  text-(--muted)
                "
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
