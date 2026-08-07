import Link from "next/link";

export default function StylingCTA() {
  return (
    <section
      className="
        border-t
        border-(--border)
        py-32
      "
    >
      <div className="mx-auto max-w-4xl px-6 text-center">

        <p
          className="
            mb-4
            text-xs
            uppercase
            tracking-[0.35em]
            text-(--primary)
          "
        >
          Ready To Begin?
        </p>

        <h2
          className="
            font-(--font-playfair)
            text-5xl
            leading-none
            md:text-7xl
          "
        >
          Transform
          <br />
          Your Style
        </h2>

        <p
          className="
            mx-auto
            mt-8
            max-w-2xl
            text-lg
            leading-relaxed
            text-(--muted)
          "
        >
          Whether you're rebuilding your wardrobe,
          preparing for an event or refining your
          personal style, we're here to help you
          dress with confidence and intention.
        </p>

        <div
          className="
            mt-12
            flex
            flex-col
            items-center
            justify-center
            gap-4
            sm:flex-row
          "
        >
          <Link
            href="/contact"
            className="
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
            Book A Session
          </Link>

          <Link
            href="/edit"
            className="
              border
              border-(--border)
              px-8
              py-4
              text-sm
              uppercase
              tracking-[0.2em]
              transition-all
              duration-300
              hover:bg-black
              hover:text-white
            "
          >
            Explore The Edit
          </Link>
        </div>

      </div>
    </section>
  );
}