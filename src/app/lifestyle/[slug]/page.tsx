import { notFound } from "next/navigation";

import { lifestyleEvents } from "@/data/lifestyle";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function LifestyleSlug({
  params,
}: Props) {
  const { slug } = await params;

  const event = lifestyleEvents.find(
    (event) => event.slug === slug
  );

  if (!event) notFound();

  return (
    <main className="mx-auto max-w-4xl px-6 py-32">

      <p className="mb-4 uppercase tracking-[0.3em] text-(--primary)">
        {event.category}
      </p>

      <h1 className="font-(--font-playfair) text-6xl">
        {event.title}
      </h1>

      <div className="mt-6 flex gap-6 text-sm text-(--muted)">
        <span>{event.location}</span>
        <span>{event.date}</span>
      </div>

      <img
        src={event.cover}
        alt={event.title}
        className="mt-12 rounded-4xl"
      />

      <article className="prose mt-16 max-w-none whitespace-pre-line">
        {event.description}
      </article>

    </main>
  );
}
