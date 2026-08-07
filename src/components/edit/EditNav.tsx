import Link from "next/link";

import { edits } from "@/data/edits";

export default function EditNav({
  currentEdit,
}: {
  currentEdit: any;
}) {
  return (
    <section className="sticky top-24 z-30 border-b border-(--border) bg-(--background)/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        <div className="flex items-center gap-6">

          <span className="text-xs uppercase tracking-[0.3em] text-(--muted)">
            The Edit
          </span>

          {edits.map((edit) => (
            <Link
              key={edit.slug}
              href={`/edit/${edit.slug}`}
              className={`text-sm uppercase tracking-[0.2em]
                ${
                  edit.slug === currentEdit.slug
                    ? "text-(--foreground)"
                    : "text-(--muted)"
                }
              `}
            >
              Vol.{edit.volume}
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}