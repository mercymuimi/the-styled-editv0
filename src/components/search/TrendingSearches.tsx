import Link from "next/link";

const searches = [
  "Dresses",
  "Vintage",
  "Blazers",
  "Denim",
  "Accessories",
  "Minimalist",
  "Events",
  "Styling",
];

export default function TrendingSearches() {
  return (
    <section className="pb-24">

      <div className="mx-auto max-w-6xl px-6">

        <p
          className="
            mb-8
            text-xs
            uppercase
            tracking-[0.35em]
            text-(--primary)
          "
        >
          Trending Searches
        </p>

        <div className="flex flex-wrap gap-4">

          {searches.map((item) => (
            <Link
              key={item}
              href="#"
              className="
                rounded-full
                border
                border-(--border)
                px-6
                py-3
                transition
                duration-300
                hover:border-(--primary)
                hover:bg-(--primary)
                hover:text-white
              "
            >
              {item}
            </Link>
          ))}

        </div>

      </div>

    </section>
  );
}
