import { Edit } from "@/types/edit";

export const edits: Edit[] = [
  {
    slug: "the-creative-edit",
    volume: "01",
    title: "The Creative Edit",
    subtitle:
      "A collection inspired by creators, storytellers and modern self-expression.",
    cover: "/images/extra1.jpg",
    story: `
The Creative Edit explores the intersection of fashion, creativity and modern self-expression.

Inspired by artists, founders and storytellers, the collection embraces relaxed tailoring, elevated essentials and intentional styling.

Rather than chasing trends, the edit focuses on building a wardrobe that feels personal, versatile and effortless.
`,
    creativeDirection: "The Styled Edit",
    focus: "Modern Creative",
    year: "2025",

    looks: [
      {
        id: "look-01",
        title: "The Modern Creative",
        description:
          "Relaxed tailoring layered with elevated essentials for everyday creative work.",
        image: "/images/collection5.jpg",
        mood: "Creative • Confident • Refined",
        editorNote:
          "Designed for founders, designers and creatives navigating work and life with confidence.",
        keyPieces: [
          "Tailored Trousers",
          "Silk Halter Top",
          "Leather Shoulder Bag",
          "Minimal Sunglasses",
        ],
      },

      {
        id: "look-02",
        title: "Quiet Confidence",
        description:
          "Minimal silhouettes and clean proportions designed to speak softly but leave impact.",
        image: "/images/collection8.jpg",
        mood: "Minimal • Modern • Elegant",
        editorNote:
          "Proof that simplicity can often feel more luxurious than excess.",
        keyPieces: [
          "Leather Jacket",
          "Wide-Leg Trousers",
          "Black Knit Top",
          "Slim Sunglasses",
        ],
      },

      {
        id: "look-03",
        title: "After Hours",
        description:
          "An effortless transition from daytime structure to evening expression.",
        image: "/images/collection9.jpg",
        mood: "Elegant • Relaxed • Elevated",
        editorNote:
          "Created for evenings that begin with work and end with celebration.",
        keyPieces: [
          "Statement Dress",
          "Structured Blazer",
          "Evening Accessories",
          "Minimal Heels",
        ],
      },
    ],
  },

  {
    slug: "the-weekend-edit",
    volume: "02",
    title: "The Weekend Edit",
    subtitle:
      "Relaxed dressing for slow mornings, coffee runs and city weekends.",
    cover: "/images/collection1.jpg",
    story: `
The Weekend Edit embraces a slower rhythm.

Built around comfort, movement and versatility, this collection explores effortless dressing for everyday moments that matter most.
`,
    creativeDirection: "The Styled Edit",
    focus: "Weekend Dressing",
    year: "2025",

    looks: [
      {
        id: "weekend-look-01",
        title: "Slow Morning",
        description:
          "Soft textures and easy silhouettes for weekends without schedules.",
        image: "/images/collection2.jpg",
        mood: "Relaxed • Comfortable • Easy",
        editorNote:
          "Style feels best when it never feels forced.",
        keyPieces: [
          "Oversized Shirt",
          "Linen Trousers",
          "Canvas Tote",
          "Slides",
        ],
      },

      {
        id: "weekend-look-02",
        title: "City Stroll",
        description:
          "Functional layers designed for movement and exploration.",
        image: "/images/collection3.jpg",
        mood: "Casual • Modern • Practical",
        editorNote:
          "Perfect for long walks and spontaneous plans.",
        keyPieces: [
          "Lightweight Jacket",
          "Relaxed Denim",
          "Crossbody Bag",
          "Sneakers",
        ],
      },

      {
        id: "weekend-look-03",
        title: "Coffee Run",
        description:
          "Simple pieces styled with intention.",
        image: "/images/extra10.jpg",
        mood: "Effortless • Comfortable • Minimal",
        editorNote:
          "The best outfits often feel the simplest.",
        keyPieces: [
          "White Tee",
          "Relaxed Trousers",
          "Tote Bag",
          "Minimal Trainers",
        ],
      },
    ],
  },
{
  slug: "the-city-edit",
  volume: "03",
  title: "The City Edit",
  subtitle:
    "Elevated dressing for busy days, meetings and modern city life.",
  cover: "/images/extra6.jpg",
  story: `
The City Edit explores modern urban dressing through refined tailoring, structured silhouettes and versatile essentials.

Designed for movement between work, meetings, creative spaces and evening plans, these looks balance practicality with sophistication.

The collection celebrates confidence, ambition and the effortless style of women navigating modern city life.
`,
  creativeDirection: "The Styled Edit",
  focus: "Urban Style",
  year: "2025",

  looks: [
    {
      id: "city-look-01",
      title: "Morning Meeting",
      description:
        "Sharp tailoring designed for confidence, movement and modern professionalism.",
      image: "/images/extra12.jpg",
      mood: "Polished • Structured • Modern",
      editorNote:
        "A strong foundation for women building careers and creative ventures.",
      keyPieces: [
        "Oversized Blazer",
        "Tailored Trousers",
        "Leather Tote",
        "Classic Loafers",
      ],
    },

    {
      id: "city-look-02",
      title: "Creative Commute",
      description:
        "Relaxed sophistication for navigating the city between meetings, cafés and studios.",
      image: "/images/collection7.jpg",
      mood: "Creative • Effortless • Contemporary",
      editorNote:
        "Designed for women constantly moving between work and inspiration.",
      keyPieces: [
        "Relaxed Shirt",
        "Wide-Leg Trousers",
        "Crossbody Bag",
        "Minimal Sneakers",
      ],
    },

    {
      id: "city-look-03",
      title: "After Work",
      description:
        "An elevated transition from office hours to evening plans.",
      image: "/images/collection8.jpg",
      mood: "Refined • Elegant • Confident",
      editorNote:
        "Minimal styling with maximum impact.",
      keyPieces: [
        "Black Midi Dress",
        "Structured Blazer",
        "Statement Earrings",
        "Leather Heels",
      ],
    },
  ],
},

{
  slug: "the-summer-edit",
  volume: "04",
  title: "The Summer Edit",
  subtitle:
    "Light fabrics, effortless silhouettes and warm-weather dressing.",
  cover: "/images/collection7.jpg",
  story: `
The Summer Edit celebrates ease, sunshine and relaxed confidence.

Featuring breathable fabrics and effortless styling, these looks are designed for long days and golden evenings.
`,
  creativeDirection: "The Styled Edit",
  focus: "Summer Dressing",
  year: "2025",
  looks: [],
},

{
  slug: "the-minimal-edit",
  volume: "05",
  title: "The Minimal Edit",
  subtitle:
    "Timeless essentials built around simplicity and intention.",
  cover: "/images/collection10.jpg",
  story: `
The Minimal Edit explores the beauty of simplicity.

Built around timeless wardrobe foundations, each piece is selected for versatility, longevity and elegance.
`,
  creativeDirection: "The Styled Edit",
  focus: "Minimalism",
  year: "2025",
  looks: [],
},

{
  slug: "the-evening-edit",
  volume: "06",
  title: "The Evening Edit",
  subtitle:
    "Elegant pieces designed for dinners, events and after-hours style.",
  cover: "/images/collection11.jpg",
  story: `
The Evening Edit embraces refined glamour and understated confidence.

Created for celebrations, special occasions and memorable nights, these looks blend sophistication with modern femininity.
`,
  creativeDirection: "The Styled Edit",
  focus: "Eveningwear",
  year: "2025",
  looks: [],
},

{
  slug: "the-travel-edit",
  volume: "07",
  title: "The Travel Edit",
  subtitle:
    "Versatile looks designed for movement, discovery and adventure.",
  cover: "/images/collection12.jpg",
  story: `
The Travel Edit is built for life on the move.

Combining comfort, versatility and elevated essentials, it celebrates effortless dressing across destinations.
`,
  creativeDirection: "The Styled Edit",
  focus: "Travel Style",
  year: "2025",
  looks: [],
},

{
  slug: "the-capsule-edit",
  volume: "08",
  title: "The Capsule Edit",
  subtitle:
    "A carefully curated wardrobe of pieces that work together effortlessly.",
  cover: "/images/collection10.jpg",
  story: `
The Capsule Edit focuses on intentional wardrobe building.

Every piece is selected to mix, match and evolve, creating endless styling possibilities with fewer items.
`,
  creativeDirection: "The Styled Edit",
  focus: "Capsule Wardrobe",
  year: "2025",
  looks: [],
},
];