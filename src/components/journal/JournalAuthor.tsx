import Link from "next/link";

export default function JournalAuthor() {
  return (
    <section className="border-t border-(--border) py-20">
      <div className="mx-auto max-w-3xl px-6">

        <div className="flex flex-col gap-8 md:flex-row md:items-center">

          {/* Avatar */}

          <div
            className="
              flex
              h-20
              w-20
              items-center
              justify-center
              rounded-full
              bg-(--primary)
              text-xl
              font-medium
              text-white
            "
          >
            TSE
          </div>

          {/* Content */}

          <div className="flex-1">

            <p
              className="
                mb-3
                text-xs
                uppercase
                tracking-[0.35em]
                text-(--primary)
              "
            >
              Written By
            </p>

            <h3
              className="
                font-(--font-playfair)
                text-3xl
              "
            >
              The Styled Edit
            </h3>

            <p
              className="
                mt-4
                max-w-2xl
                leading-relaxed
                text-(--muted)
              "
            >
              Fashion, style and lifestyle stories for
              women building wardrobes with intention,
              confidence and individuality.
            </p>

            <Link
              href="/about"
              className="
                mt-6
                inline-flex
                text-sm
                uppercase
                tracking-[0.2em]
                text-(--primary)
                transition-opacity
                hover:opacity-70
              "
            >
              Learn More About The Styled Edit →
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
}
