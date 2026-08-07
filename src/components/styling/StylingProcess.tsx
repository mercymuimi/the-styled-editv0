export default function StylingProcess() {
  const steps = [
    {
      number: "01",
      title: "Consultation",
      description:
        "We start with a conversation about your lifestyle, wardrobe challenges, style goals and the image you want to project.",
    },

    {
      number: "02",
      title: "Style Strategy",
      description:
        "You'll receive a personalized styling plan with outfit direction, wardrobe recommendations and practical next steps.",
    },

    {
      number: "03",
      title: "Transformation",
      description:
        "Build a wardrobe that feels intentional, versatile and aligned with who you are and where you're going.",
    },
  ];

  return (
    <section className="border-t border-(--border) py-32">
      <div className="mx-auto max-w-7xl px-6">

        {/* Section Intro */}

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
            How It Works
          </p>

          <h2
            className="
              font-(--font-playfair)
              text-5xl
              md:text-6xl
            "
          >
            A Simple
            <br />
            Styling Journey
          </h2>

        </div>

        {/* Steps */}

        <div className="grid gap-10 lg:grid-cols-3">

          {steps.map((step) => (
            <div
              key={step.number}
              className="
                border-t
                border-(--border)
                pt-8
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
                {step.number}
              </p>

              <h3
                className="
                  mt-6
                  font-(--font-playfair)
                  text-3xl
                "
              >
                {step.title}
              </h3>

              <p
                className="
                  mt-6
                  leading-relaxed
                  text-(--muted)
                "
              >
                {step.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
