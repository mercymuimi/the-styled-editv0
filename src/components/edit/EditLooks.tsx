"use client";

import Image from "next/image";

import { Edit } from "@/types/edit";

type Props = {
  edit: Edit;
};

export default function EditLooks({ edit }: Props) {
  return (
    <section>
      <div className="mb-24 max-w-3xl">
        <p className="mb-4 text-xs uppercase tracking-[0.35em] text-neutral-500">
          The Looks
        </p>

        <h2 className="mb-8 font-(--font-playfair) text-5xl md:text-6xl">
          Editorial Looks
        </h2>

        <p className="text-lg leading-relaxed text-neutral-600">
          Every look is styled intentionally—balancing silhouette, texture,
          functionality and self-expression.
        </p>
      </div>

      <div className="space-y-40">
        {edit.looks.map((look, index) => (
          <div
            key={look.id}
            id={look.id}
            className="grid items-center gap-16 lg:grid-cols-2"
          >
            {index % 2 === 0 ? (
              <>
                <ImageBlock look={look} />

                <TextBlock
                  look={look}
                  number={index + 1}
                />
              </>
            ) : (
              <>
                <TextBlock
                  look={look}
                  number={index + 1}
                />

                <ImageBlock look={look} />
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

function ImageBlock({
  look,
}: {
  look: Edit["looks"][number];
}) {
  return (
    <div className="relative aspect-4/5 overflow-hidden bg-neutral-100">
      <Image
        src={look.image}
        alt={look.title}
        fill
        className="object-cover transition-all duration-700 group-hover:scale-[1.02]"
      />
    </div>
  );
}

function TextBlock({
  look,
  number,
}: {
  look: Edit["looks"][number];
  number: number;
}) {
  return (
    <div>
      <p className="mb-4 text-xs uppercase tracking-[0.35em] text-neutral-500">
        Look {String(number).padStart(2, "0")}
      </p>

      <p className="mb-6 text-xs uppercase tracking-[0.35em] text-neutral-400">
        Featured Styling Direction
      </p>

      <h3 className="mb-6 font-(--font-playfair) text-5xl leading-none md:text-6xl">
        {look.title}
      </h3>

      <p className="mb-10 max-w-xl text-lg leading-relaxed text-neutral-600">
        {look.description}
      </p>

      {/* Mood */}
      <div className="mb-12">
        <p className="mb-4 text-xs uppercase tracking-[0.3em] text-neutral-500">
          Mood
        </p>

        <div className="flex flex-wrap gap-3">
          {look.mood.split(" • ").map((item: string) => (
            <span
              key={item}
              className="border border-neutral-300 px-4 py-2 text-[11px] uppercase tracking-[0.2em]"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Editor Note */}
      <div className="mb-12 border-l border-neutral-300 pl-6">
        <p className="mb-3 text-xs uppercase tracking-[0.3em] text-neutral-500">
          Editor&apos;s Note
        </p>

        <p className="max-w-lg leading-relaxed">
          {look.editorNote}
        </p>
      </div>

      {/* Key Pieces */}
      <div className="mb-12">
        <p className="mb-4 text-xs uppercase tracking-[0.3em] text-neutral-500">
          Key Pieces
        </p>

        <div className="grid gap-3 sm:grid-cols-2">
          {look.keyPieces.map((piece: string) => (
            <div
              key={piece}
              className="border border-neutral-200 px-4 py-3 text-sm"
            >
              {piece}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}