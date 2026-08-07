import Link from "next/link";

const categories = [
  {
    title: "Fashion",
    href: "/edit",
    description: "Curated thrift & timeless essentials",
  },
  {
    title: "Styling",
    href: "/styling",
    description: "Book a styling session",
  },
  {
    title: "Journal",
    href: "/journal",
    description: "Style inspiration & stories",
  },
  {
    title: "Lifestyle",
    href: "/lifestyle",
    description: "Events & community moments",
  },
];

export default function BrowseCategories() {
  return (
    <section className="pb-24">

      <div className="mx-auto max-w-7xl px-6">

        <p
          className="
            mb-10
            text-xs
            uppercase
            tracking-[0.35em]
            text-(--primary)
          "
        >
          Browse Categories
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {categories.map((category) => (

            <Link
              key={category.title}
              href={category.href}
              className="
                rounded-[2rem]
                border
                border-(--border)
                bg-white
                p-8
                transition
                duration-300
                hover:-translate-y-1
                hover:border-(--primary)
              "
            >

              <h3
                className="
                  font-(--font-playfair)
                  text-3xl
                "
              >
                {category.title}
              </h3>

              <p
                className="
                  mt-4
                  leading-relaxed
                  text-(--muted)
                "
              >
                {category.description}
              </p>

            </Link>

          ))}

        </div>

      </div>

    </section>
  );
}