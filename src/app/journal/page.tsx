import JournalHero from "@/components/journal/JournalHero";
import FeaturedArticle from "@/components/journal/FeaturedArticle";
import ArticleGrid from "@/components/journal/ArticleGrid";
import JournalNewsletter from "@/components/journal/JournalNewsletter";

import { journalArticles } from "@/data/journal";

export default function JournalPage() {
  const featuredArticle = journalArticles[0];

  return (
    <main>

      <JournalHero />

      <FeaturedArticle
        article={featuredArticle}
      />

      <ArticleGrid
        articles={journalArticles.slice(1)}
      />
      <JournalNewsletter />

    </main>
  );
}