import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import JournalCTA from "@/components/journal/JournalCTA";
import { journalArticles } from "@/data/journal";
import JournalAuthor from "@/components/journal/JournalAuthor";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function JournalArticlePage({ params }: Props) {
  const { slug } = await params;

  const article = journalArticles.find((item) => item.slug === slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = journalArticles
    .filter((item) => item.slug !== article.slug)
    .slice(0, 3);

  return (
    <main>
      {/* HERO */}
      <section className="pt-44 pb-16">
        <div className="mx-auto max-w-4xl px-6">
          <p className="mb-6 text-xs uppercase tracking-[0.35em] text-(--primary)">
            {article.category}
          </p>

          <h1 className="font-(--font-playfair) text-5xl leading-tight md:text-7xl">
            {article.title}
          </h1>

          <div className="mt-8 flex gap-4 text-sm text-(--muted)">
            <span>{article.date}</span>
            <span>•</span>
            <span>{article.readTime}</span>
          </div>
        </div>
      </section>

      {/* COVER */}
      <section className="pb-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="relative aspect-video overflow-hidden border border-(--border)">
            <Image
              src={article.cover}
              alt={article.title}
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ARTICLE CONTENT */}
      <section className="pb-32">
        <div className="mx-auto max-w-3xl px-6">
          <div className="space-y-20">
            {article.content.map((section) => (
              <div key={section.heading} className="space-y-6">
                <h2 className="font-(--font-playfair) text-4xl leading-tight">
                  {section.heading}
                </h2>

                <p className="text-lg leading-relaxed text-(--muted)">
                  {section.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <JournalAuthor />

      {/* RELATED ARTICLES */}
      <section className="border-t border-(--border) py-24">
        <div className="mx-auto max-w-7xl px-6">
          <p className="mb-12 text-xs uppercase tracking-[0.35em] text-(--muted)">
            Related Articles
          </p>

          <div className="grid gap-8 md:grid-cols-3">
            {relatedArticles.map((item) => (
              <Link
                key={item.slug}
                href={`/journal/${item.slug}`}
                className="group overflow-hidden border border-(--border) bg-white transition-colors duration-300 hover:border-(--primary)"
              >
                <div className="relative h-60 overflow-hidden">
                  <Image
                    src={item.cover}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-6">
                  <p className="text-xs uppercase tracking-[0.3em] text-(--primary)">
                    {item.category}
                  </p>

                  <h3 className="mt-4 font-(--font-playfair) text-2xl">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-relaxed text-(--muted)">
                    {item.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <JournalCTA />
    </main>
  );
}