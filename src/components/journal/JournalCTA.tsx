import Link from "next/link";

export default function JournalCTA() {
  return (
    <section className="border-t border-(--border) py-32">
      <div className="mx-auto max-w-5xl px-6 text-center">

        {/* Eyebrow */}

        <p
          className="
            mb-6
            text-xs
            uppercase
            tracking-[0.35em]
            text-(--primary)
          "
        >
          Continue Exploring
        </p>

        {/* Heading */}

        <h2
          className="
            font-(--font-playfair)
            text-5xl
            leading-none
            md:text-7xl
          "
        >
          Enjoyed This Story?
        </h2>

        {/* Description */}

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
          Discover more style guides, fashion editorials
          and lifestyle stories from The Styled Edit.
        </p>

        {/* Buttons */}

        <div
          className="
            mt-14
            flex
            flex-col
            justify-center
            gap-4
            sm:flex-row
          "
        >
          <Link
            href="/journal"
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
            Browse Journal
          </Link>

          <Link
            href="/edit"
            className="
              inline-flex
              items-center
              justify-center
              border
              border-(--border)
              px-8
              py-4
              text-sm
              uppercase
              tracking-[0.2em]
              transition-all
              duration-300
              hover:border-(--foreground)
            "
          >
            Explore The Edit
          </Link>
        </div>

        {/* Editorial Quote */}

        <div
          className="
            mx-auto
            mt-20
            max-w-3xl
            border-t
            border-(--border)
            pt-12
          "
        >
          <p
            className="
              font-(--font-playfair)
              text-2xl
              italic
              md:text-3xl
            "
          >
            "Fashion is more meaningful when it
            becomes part of your story."
          </p>

          <p
            className="
              mt-6
              text-xs
              uppercase
              tracking-[0.3em]
              text-(--muted)
            "
          >
            — The Styled Edit
          </p>
        </div>

      </div>
    </section>
  );
}
