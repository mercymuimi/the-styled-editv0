import ArticleCard from "./ArticleCard";

type Props = {
  articles: {
    slug: string;
    title: string;
    category: string;
    excerpt: string;
    cover: string;
    date: string;
    readTime: string;
  }[];
};

export default function ArticleGrid({
  articles,
}: Props) {
  return (
    <section className="pb-32">
      <div className="mx-auto max-w-7xl px-6">

        {/* Section Heading */}

        <div className="mb-12">
          <p
            className="
              text-xs
              uppercase
              tracking-[0.35em]
              text-(--muted)
            "
          >
            Latest Articles
          </p>
        </div>

        {/* Articles Grid */}

        <div
          className="
            grid
            gap-8
            md:grid-cols-2
            xl:grid-cols-3
          "
        >
          {articles.map((article) => (
            <ArticleCard
              key={article.slug}
              article={article}
            />
          ))}
        </div>

      </div>
    </section>
  );
}