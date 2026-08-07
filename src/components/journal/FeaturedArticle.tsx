import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";

type Props = {
  article: {
    slug: string;
    title: string;
    category: string;
    excerpt: string;
    cover: string;
  };
};

export default function FeaturedArticle({
  article,
}: Props) {
  return (
    <section className="pb-32">

      <Container>

        <Link
          href={`/journal/${article.slug}`}
          className="
            group
            block
            overflow-hidden
            rounded-[40px]
            bg-white
          "
        >

          <div className="grid lg:grid-cols-2">

            <div className="relative min-h-150">

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

            <div
              className="
                flex
                flex-col
                justify-center
                p-10
                md:p-16
              "
            >

              <p
                className="
                  mb-4
                  text-xs
                  uppercase
                  tracking-[0.35em]
                  text-(--primary)
                "
              >
                Featured Article
              </p>

              <h2
                className="
                  font-(--font-playfair)
                  text-5xl
                  leading-none
                "
              >
                {article.title}
              </h2>

              <p
                className="
                  mt-8
                  text-lg
                  leading-relaxed
                  text-(--muted)
                "
              >
                {article.excerpt}
              </p>

              <span
                className="
                  mt-10
                  text-xs
                  uppercase
                  tracking-[0.3em]
                "
              >
                Read Article →
              </span>

            </div>

          </div>

        </Link>

      </Container>

    </section>
  );
}
