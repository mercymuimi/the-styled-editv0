export default function Hero() {
  return (
    <section className="pt-44 pb-20">
      <div className="mx-auto max-w-5xl px-6 text-center">

        <p
          className="
            text-xs
            uppercase
            tracking-[0.35em]
            text-(--primary)
          "
        >
          Search
        </p>

        <h1
          className="
            mt-6
            font-(--font-playfair)
            text-5xl
            leading-tight
            md:text-7xl
          "
        >
          Discover Your
          <br />
          Next Favourite Piece.
        </h1>

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
          Search across curated fashion, styling services,
          journal stories and lifestyle experiences — all in one place.
        </p>

      </div>
    </section>
  );
}
