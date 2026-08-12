export type HeroLook = {
  id: string;
  number: string;
  title: string;
  description: string;
  image: string;

  editSlug: string;
  lookId: string;
};

export const heroLooks: HeroLook[] = [
  {
    id: "hero-look-01",
    number: "01",
    title: "The Off-Duty Edit",
    description:
      "Relaxed tailoring, vintage denim and effortless city energy.",
    image: "/images/hero1.jpg",

    editSlug: "the-creative-edit",
    lookId: "look-01",
  },

  {
    id: "hero-look-02",
    number: "02",
    title: "Quiet Confidence",
    description:
      "Minimal silhouettes and refined essentials designed with intention.",
    image: "/images/hero2.jpg",

    editSlug: "the-creative-edit",
    lookId: "look-02",
  },

  {
    id: "hero-look-03",
    number: "03",
    title: "City After Hours",
    description:
      "Structured layers that move effortlessly from day to night.",
    image: "/images/extra6.jpg",

    editSlug: "the-city-edit",
    lookId: "city-look-03",
  },

  {
    id: "hero-look-04",
    number: "04",
    title: "The Weekend Edit",
    description:
      "Easy silhouettes, soft textures and effortless weekend dressing.",
    image: "/images/collection1.jpg",

    editSlug: "the-weekend-edit",
    lookId: "weekend-look-01",
  },
];