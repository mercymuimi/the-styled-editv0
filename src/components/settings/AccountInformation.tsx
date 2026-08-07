"use client";

import { useState } from "react";
import { User, Mail, Phone, Pencil, Check } from "lucide-react";

export default function AccountInformation() {
  const [editing, setEditing] = useState(false);

  return (
    <section>
      <div className="mx-auto max-w-5xl px-6">
        <div className="rounded-3xl border border-(--border) bg-(--surface) p-6 sm:p-8">

          <div className="mb-8 flex items-start justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-(--primary)">
                Personal
              </p>

              <h2 className="mt-2 font-(--font-playfair) text-2xl">
                Account Information
              </h2>

              <p className="mt-2 text-sm text-(--muted)">
                Keep your personal information up to date.
              </p>
            </div>

            <button
              onClick={() => setEditing(!editing)}
              className="flex items-center gap-2 rounded-full border border-(--border) px-4 py-2 text-xs uppercase tracking-[0.15em] transition hover:bg-(--background)"
            >
              {editing ? <Check size={15} /> : <Pencil size={15} />}
              {editing ? "Done" : "Edit"}
            </button>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">

            <div>
              <label className="mb-2 block text-xs uppercase tracking-[0.15em] text-(--muted)">
                Full Name
              </label>

              <div className="flex items-center gap-3 rounded-2xl border border-(--border) bg-(--background) px-4 py-3">
                <User size={17} className="text-(--muted)" />

                <input
                  disabled={!editing}
                  defaultValue="Mercy Muimi"
                  className="w-full bg-transparent text-sm outline-none disabled:cursor-default"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-xs uppercase tracking-[0.15em] text-(--muted)">
                Email
              </label>

              <div className="flex items-center gap-3 rounded-2xl border border-(--border) bg-(--background) px-4 py-3">
                <Mail size={17} className="text-(--muted)" />

                <input
                  disabled={!editing}
                  type="email"
                  defaultValue="hello@example.com"
                  className="w-full bg-transparent text-sm outline-none disabled:cursor-default"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-xs uppercase tracking-[0.15em] text-(--muted)">
                Phone
              </label>

              <div className="flex items-center gap-3 rounded-2xl border border-(--border) bg-(--background) px-4 py-3">
                <Phone size={17} className="text-(--muted)" />

                <input
                  disabled={!editing}
                  type="tel"
                  defaultValue="+254 700 000 000"
                  className="w-full bg-transparent text-sm outline-none disabled:cursor-default"
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
