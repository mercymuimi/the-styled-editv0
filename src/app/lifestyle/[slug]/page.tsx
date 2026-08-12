import Image from "next/image";
import { notFound } from "next/navigation";

import Container from "@/components/ui/Container";
import { lifestyleEvents } from "@/data/lifestyle";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function LifestyleSlug({ params }: Props) {
  const { slug } = await params;

  const event = lifestyleEvents.find(
    (item) => item.slug === slug
  );

  if (!event) {
    notFound();
  }

  return (
    <main>
      {/* Header */}
      <section className="pt-32 pb-16">
        <Container>
          <div className="max-w-4xl">
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-(--primary)">
              {event.category}
            </p>

            <h1 className="font-(--font-playfair) text-5xl leading-tight md:text-7xl">
              {event.title}
            </h1>

            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-(--muted)">
              <span>{event.location}</span>
              <span>{event.date}</span>
            </div>
          </div>
        </Container>
      </section>

      {/* Cover Image */}
      <section>
        <Container>
          <div className="relative aspect-video overflow-hidden rounded-4xl">
            <Image
              src={event.cover}
              alt={event.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 1200px"
              className="object-cover"
            />
          </div>
        </Container>
      </section>

      {/* Description */}
      <section className="py-20 md:py-28">
        <Container>
          <article className="max-w-3xl whitespace-pre-line text-lg leading-relaxed text-(--muted)">
            {event.description}
          </article>
        </Container>
      </section>
    </main>
  );
}