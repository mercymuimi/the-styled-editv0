"use client";

import { useState } from "react";
import { SlidersHorizontal } from "lucide-react";

export default function Preferences() {
  const [currency, setCurrency] = useState("KES");
  const [size, setSize] = useState("M");

  return (
    <section>
      <div className="mx-auto max-w-5xl px-6">
        <div className="rounded-3xl border border-(--border) bg-(--surface) p-6 sm:p-8">

          <div className="mb-8">
            <p className="text-xs uppercase tracking-[0.25em] text-(--primary)">
              Your Experience
            </p>

            <h2 className="mt-2 font-(--font-playfair) text-2xl">
              Preferences
            </h2>

            <p className="mt-2 text-sm text-(--muted)">
              Personalise your TSE shopping experience.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">

            <div>
              <label className="mb-2 block text-xs uppercase tracking-[0.15em] text-(--muted)">
                Currency
              </label>

              <div className="flex items-center gap-3 rounded-2xl border border-(--border) bg-(--background) px-4 py-3">
                <SlidersHorizontal
                  size={17}
                  className="text-(--muted)"
                />

                <select
                  value={currency}
                  onChange={(event) =>
                    setCurrency(event.target.value)
                  }
                  className="w-full bg-transparent text-sm outline-none"
                >
                  <option value="KES">Kenyan Shilling (KES)</option>
                  <option value="USD">US Dollar (USD)</option>
                  <option value="GBP">British Pound (GBP)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="mb-2 block text-xs uppercase tracking-[0.15em] text-(--muted)">
                Clothing Size
              </label>

              <div className="rounded-2xl border border-(--border) bg-(--background) px-4 py-3">
                <select
                  value={size}
                  onChange={(event) =>
                    setSize(event.target.value)
                  }
                  className="w-full bg-transparent text-sm outline-none"
                >
                  <option value="XS">XS</option>
                  <option value="S">S</option>
                  <option value="M">M</option>
                  <option value="L">L</option>
                  <option value="XL">XL</option>
                  <option value="XXL">XXL</option>
                </select>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
