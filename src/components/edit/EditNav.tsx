import Link from "next/link";

import { edits } from "@/data/edits";
import { Edit } from "@/types/edit";

type Props = {
  currentEdit: Edit;
};

export default function EditNav({ currentEdit }: Props) {
  return (
    <section>
      <div className="flex items-center gap-6">
        <span className="text-xs uppercase tracking-[0.3em] text-(--muted)">
          The Edit
        </span>

        {edits.map((edit) => (
          <Link
            key={edit.slug}
            href={`/edit/${edit.slug}`}
            className={`text-sm uppercase tracking-[0.2em] ${
              edit.slug === currentEdit.slug
                ? "text-(--foreground)"
                : "text-(--muted)"
            }`}
          >
            Vol.{edit.volume}
          </Link>
        ))}
      </div>
    </section>
  );
}