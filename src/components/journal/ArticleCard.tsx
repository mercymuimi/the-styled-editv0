import Image from "next/image";
import Link from "next/link";

type Props = {
  article: {
    slug: string;
    title: string;
    category: string;
    excerpt: string;
    cover: string;
    date: string;
    readTime: string;
  };
};

export default function ArticleCard({
  article,
}: Props) {
  return (
    <Link
      href={`/journal/${article.slug}`}
      className="group block"
    >
      <div
        className="
          overflow-hidden
          rounded-4xl
          bg-white
        "
      >
        <div className="relative aspect-4/5">
          <Image
            src={article.cover}
            alt={article.title}
            fill
            className="
              object-cover
              transition-all
              duration-700
              group-hover:scale-105
            "
          />
        </div>

        <div className="p-8">

          {/* Category + Read Time */}

          <div
            className="
              mb-4
              flex
              items-center
              gap-3
              text-xs
              uppercase
              tracking-[0.3em]
              text-(--primary)
            "
          >
            <span>{article.category}</span>

            <span className="text-(--muted)">•</span>

            <span>{article.readTime}</span>
          </div>

          <h3
            className="
              font-(--font-playfair)
              text-3xl
              leading-tight
            "
          >
            {article.title}
          </h3>

          <p
            className="
              mt-4
              leading-relaxed
              text-(--muted)
            "
          >
            {article.excerpt}
          </p>

          <p
            className="
              mt-6
              text-xs
              uppercase
              tracking-[0.2em]
              text-(--muted)
            "
          >
            {article.date}
          </p>

        </div>
      </div>
    </Link>
  );
}