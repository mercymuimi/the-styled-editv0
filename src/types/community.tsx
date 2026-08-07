export type CommunityBenefit = {
  title: string;
  description: string;
};

export type CommunityChannel = {
  type: "community" | "social";

  name: string;
  description: string;

  link: string;
  cta: string;
};

export type CommunityStat = {
  value: string;
  label: string;
};

export type CommunityTestimonial = {
  name: string;
  role: string;
  quote: string;
};