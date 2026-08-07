"use client";

import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <section className="pb-24">
      <div className="mx-auto max-w-4xl px-6">

        <div
          className="flex items-center gap-4 rounded-full border border-(--border) bg-white px-6 py-5 shadow-sm transition duration-300 focus-within:border-(--primary) focus-within:shadow-md"
        >

          <Search
            size={22}
            className="text-(--muted)"
          />

          <input
            type="text"
            placeholder="Search products, outfits, journal articles..."
            className="w-full bg-transparent text-lg outline-none placeholder:text-(--muted)"
          />

        </div>

      </div>
    </section>
  );
}
