export default function StylingHero() {
  return (
    <section className="pt-40 pb-24">
      <div className="mx-auto max-w-6xl px-6 text-center">

        <p
          className="
            mb-6
            text-xs
            uppercase
            tracking-[0.35em]
            text-(--primary)
          "
        >
          Personal Styling
        </p>

        <h1
          className="
            font-(--font-playfair)
            text-6xl
            leading-none
            md:text-8xl
          "
        >
          Style With
          <br />
          Intention
        </h1>

        <p
          className="
            mx-auto
            mt-8
            max-w-3xl
            text-lg
            leading-relaxed
            text-(--muted)
          "
        >
          Whether you're rebuilding your wardrobe,
          preparing for an event, or refining your
          personal style, The Styled Edit helps you
          create a wardrobe that reflects who you are.
        </p>

        <div className="mt-12">
          <a
            href="#services"
            className="
              inline-flex
              items-center
              justify-center
              bg-(--primary)
              px-8
              py-4
              text-sm
              uppercase
              tracking-[0.2em]
              text-white
              transition-all
              duration-300
              hover:opacity-90
            "
          >
            Explore Services
          </a>
        </div>

      </div>
    </section>
  );
}