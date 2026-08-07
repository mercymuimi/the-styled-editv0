import Link from "next/link";

export default function EmptyCart() {
  return (
    <div className="flex min-h-[55vh] flex-col items-center justify-center text-center">
      <p className="text-xs uppercase tracking-[0.35em] text-(--primary)">
        Your Edit
      </p>

      <h1 className="mt-5 font-(--font-playfair) text-4xl sm:text-5xl">
        Your bag is empty.
      </h1>

      <p className="mt-5 max-w-md text-sm leading-7 text-(--muted)">
        Nothing here yet. Discover pieces curated
        for your personal style and start building
        your edit.
      </p>

      <Link
        href="/edit"
        className="
          mt-8
          rounded-full
          bg-(--primary)
          px-8
          py-4
          text-xs
          uppercase
          tracking-[0.25em]
          text-white
          transition
          hover:opacity-90
        "
      >
        Shop The Edit
      </Link>
    </div>
  );
}