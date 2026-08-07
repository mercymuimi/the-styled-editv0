import { LifestyleEvent } from "@/types/lifestyle";

export const lifestyleEvents: LifestyleEvent[] = [
  {
    slug: "style-and-splash-vol-1",

    title: "Style & Splash Vol. 1",

    category: "Community Event",

    location: "Nairobi",

    date: "August 16, 2026",

    cover: "/images/event1.jpg",

    excerpt:
      "A fashion experience bringing together thrift lovers, creatives and stylists.",

    description: `
Style & Splash is our signature community event.

Expect styling sessions,
creative networking,
music,
vendors,
thrift shopping,
and memorable experiences.

Whether you're coming alone or with friends,
you'll leave inspired.
`,

    gallery: [
      "/images/gallery1.jpg",
      "/images/gallery2.jpg",
      "/images/gallery3.jpg",
    ],
  },

  {
    slug: "wardrobe-reset-workshop",

    title: "Wardrobe Reset Workshop",

    category: "Workshop",

    location: "Nairobi",

    date: "September 2026",

    cover: "/images/event2.jpg",

    excerpt:
      "Learn how to build a wardrobe that truly reflects your style.",

    description: `
An intimate styling workshop focused on decluttering,
capsule wardrobes,
shopping smarter,
and discovering your personal style.
`,
  },

  {
    slug: "creative-networking-brunch",

    title: "Creative Networking Brunch",

    category: "Networking",

    location: "Nairobi",

    date: "October 2026",

    cover: "/images/event3.jpg",

    excerpt:
      "Meet photographers, stylists, models and fashion creatives.",

    description: `
Fashion is better together.

This brunch is designed to connect women building beautiful things.
`,
  },
];
