import {
  Sparkles,
  Users,
  Camera,
  Shirt,
} from "lucide-react";

const benefits = [
  {
    icon: Sparkles,
    title: "Exclusive Styling Sessions",
    description:
      "Receive practical styling advice, wardrobe inspiration and fashion education from our team.",
  },
  {
    icon: Users,
    title: "Meaningful Community",
    description:
      "Meet women who love fashion, creativity and building confidence through personal style.",
  },
  {
    icon: Camera,
    title: "Editorial Experiences",
    description:
      "Attend curated photoshoots, networking events, brunches and fashion-inspired experiences.",
  },
  {
    icon: Shirt,
    title: "Early Access",
    description:
      "Be the first to shop new thrift drops, styling offers and exclusive community collections.",
  },
];

export default function CommunityBenefits() {
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
            Why Join?
          </p>

          <h2
            className="
              mt-4
              font-(--font-playfair)
              text-5xl
            "
          >
            More Than Fashion.
          </h2>

          <p
            className="
              mt-8
              text-lg
              leading-9
              text-(--muted)
            "
          >
            The Styled Edit is a growing community of women who
            believe fashion is more than clothing—it’s confidence,
            creativity and connection.
          </p>

        </div>

        <div
          className="
            mt-20
            grid
            gap-8
            md:grid-cols-2
          "
        >

          {benefits.map((benefit) => {

            const Icon = benefit.icon;

            return (

              <div
                key={benefit.title}
                className="
                  rounded-4xl
                  border
                  border-(--border)
                  bg-white
                  p-10
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:shadow-xl
                "
              >

                <div
                  className="
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-full
                    bg-(--surface)
                  "
                >
                  <Icon
                    size={24}
                    className="text-(--primary)"
                  />
                </div>

                <h3
                  className="
                    mt-8
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

            );

          })}

        </div>

      </div>

    </section>
  );
}
