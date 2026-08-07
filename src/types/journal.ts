export type JournalSection = {
  heading: string;
  body: string;
};

export type JournalArticle = {
  slug: string;

  title: string;

  category: string;

  date: string;

  readTime: string;

  excerpt: string;

  cover: string;

  content: JournalSection[];
};
