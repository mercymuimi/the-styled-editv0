import Container from "@/components/ui/Container";

export default function JournalHero() {
  return (
    <section className="pt-44 pb-24">

      <Container>

        <div className="max-w-5xl">

          {/* EYEBROW */}

          <p
            className="
              mb-6
              text-xs
              uppercase
              tracking-[0.4em]
              text-(--primary)
            "
          >
            The Styled Edit
          </p>

          {/* TITLE */}

          <h1
            className="
              font-(--font-playfair)
              text-6xl
              leading-none
              md:text-8xl
            "
          >
            Journal
          </h1>

          {/* DESCRIPTION */}

          <p
            className="
              mt-8
              max-w-2xl
              text-lg
              leading-relaxed
              text-(--muted)
            "
          >
            Thoughts on style, fashion,
            creativity and intentional living.
            Explore styling guides, editorials,
            trend insights and stories from
            The Styled Edit.
          </p>

        </div>

      </Container>

    </section>
  );
}