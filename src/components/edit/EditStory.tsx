import { Edit } from "@/types/edit";

type Props = {
  edit: Edit;
};

export default function EditStory({
  edit,
}: Props) {
  return (
    <section
      id="story"
      className="
        border-t
        border-(--border)
        py-32
      "
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="grid gap-20 lg:grid-cols-12">

          {/* Label */}

          <div className="lg:col-span-3">

            <p
              className="
                text-xs
                uppercase
                tracking-[0.35em]
                text-(--primary)
              "
            >
              Editor's Note
            </p>

          </div>

          {/* Content */}

          <div className="lg:col-span-9">

            <blockquote
              className="
                max-w-4xl
                font-(--font-playfair)
                text-4xl
                leading-tight
                md:text-6xl
              "
            >
              Style is most powerful when it feels
              effortless, personal and intentional.
            </blockquote>

            <div
              className="
                mt-14
                max-w-3xl
                space-y-8
                text-lg
                leading-relaxed
                text-(--muted)
              "
            >
              {edit.story
                .split("\n")
                .filter(Boolean)
                .map((paragraph, index) => (
                  <p key={index}>
                    {paragraph}
                  </p>
                ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}