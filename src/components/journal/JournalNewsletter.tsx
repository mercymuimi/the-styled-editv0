export default function JournalNewsletter() {
  return (
    <section
      className="
        border-t
        border-(--border)
        py-32
      "
    >
      <div className="mx-auto max-w-4xl px-6 text-center">

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
          The Styled Edit Journal
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
          Stay Inspired
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
          Receive style guides, fashion editorials,
          styling tips and new editions from
          The Styled Edit directly in your inbox.
        </p>

        {/* Form */}

        <form
          className="
            mx-auto
            mt-12
            flex
            max-w-2xl
            flex-col
            gap-4
            sm:flex-row
          "
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="
              flex-1
              border
              border-(--border)
              bg-transparent
              px-6
              py-4
              outline-none
            "
          />

          <button
            type="submit"
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
            Subscribe
          </button>
        </form>

        {/* Small Note */}

        <p
          className="
            mt-6
            text-sm
            text-(--muted)
          "
        >
          No spam. Just thoughtful style content.
        </p>

      </div>
    </section>
  );
}
