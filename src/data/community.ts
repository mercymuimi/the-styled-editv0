import {
  CommunityBenefit,
  CommunityChannel,
  CommunityStat,
  CommunityTestimonial,
} from "@/types/community";

export const communityBenefits: CommunityBenefit[] = [
  {
    title: "Meaningful Connections",
    description:
      "Meet women who love fashion, creativity and building confidence together.",
  },
  {
    title: "Exclusive Experiences",
    description:
      "Gain early access to workshops, Style & Splash events and community gatherings.",
  },
  {
    title: "Styling Inspiration",
    description:
      "Receive styling advice, wardrobe ideas and fashion tips from The Styled Edit.",
  },
  {
    title: "Creative Opportunities",
    description:
      "Collaborate with photographers, stylists, creators and local brands.",
  },
];

export const communityChannels: CommunityChannel[] = [
  {
    type: "community",

    name: "Community Hub",

    description:
      "Join our main WhatsApp Community to receive announcements, event updates and access all our groups.",

    link: "https://chat.whatsapp.com/DZGoBCqjN2yF5Fdef3DRRm",

    cta: "Join Community",
  },

  {
    type: "community",

    name: "Family Group",

    description:
      "Become part of our main family group where members connect, share inspiration and build friendships.",

    link: "https://chat.whatsapp.com/E1svM76iwp5HtHUnwDbkpT?s=cl&p=i&ilr=0",

    cta: "Join Group",
  },

  {
    type: "community",

    name: "Second Community Group",

    description:
      "A space for daily conversations, styling discussions and community engagement.",

    link: "https://chat.whatsapp.com/Hq4cOWQJnaIHhrGdI3TDxx?s=cl&p=i&ilr=0",

    cta: "Join Group",
  },

  {
    type: "social",

    name: "Instagram",

    description:
      "Daily outfit inspiration, styling tips and behind-the-scenes moments.",

    link: "https://www.instagram.com/dressandstyle2025?igsh=MW1wcGVlYWp6MWMxYw%3D%3D&utm_source=qr",

    cta: "Follow",
  },

  {
    type: "social",

    name: "TikTok",

    description:
      "Fashion edits, styling videos and thrift finds in motion.",

    link: "https://www.tiktok.com/@thestylededit25?_r=1&_t=ZS-98JuouYikXS",

    cta: "Watch",
  },

  {
    type: "social",

    name: "Pinterest",

    description:
      "Mood boards, outfit inspiration and curated fashion aesthetics.",

    link: "https://pin.it/5jhEXM0fn",

    cta: "Explore",
  },
];

export const communityStats: CommunityStat[] = [
  {
    value: "500+",
    label: "Community Members",
  },
  {
    value: "15+",
    label: "Events Hosted",
  },
  {
    value: "100+",
    label: "Women Styled",
  },
  {
    value: "Nairobi",
    label: "Growing Community",
  },
];

export const communityTestimonials: CommunityTestimonial[] = [
  {
    name: "Mercy",

    role: "Community Member",

    quote:
      "The Styled Edit helped me build confidence in my personal style while connecting me with incredible women.",
  },
  {
    name: "Angela",

    role: "Style & Splash Attendee",

    quote:
      "Every event feels welcoming, intentional and beautifully curated.",
  },
  {
    name: "Faith",

    role: "Workshop Participant",

    quote:
      "I've learned more about personal style here than anywhere else.",
  },
];