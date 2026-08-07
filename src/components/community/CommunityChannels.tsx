import Link from "next/link";

import {
  ArrowUpRight,
  MessageCircle,
} from "lucide-react";

import {
  FaInstagram,
  FaPinterestP,
  FaTiktok,
} from "react-icons/fa6";

import { communityChannels } from "@/data/community";

const icons = {
  "Community Hub": MessageCircle,
  "Family Group": MessageCircle,
  "Second Community Group": MessageCircle,

  Instagram: FaInstagram,
  TikTok: FaTiktok,
  Pinterest: FaPinterestP,
};

export default function CommunityChannels() {
const community = communityChannels.filter(
  (item) => item.type === "community"
);

const socials = communityChannels.filter(
  (item) => item.type === "social"
);
  return (
    <section className="pb-32">

      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="max-w-3xl">

          <p
            className="
              text-xs
              uppercase
              tracking-[0.35em]
              text-(--primary)
            "
          >
            Connect
          </p>

          <h2
            className="
              mt-4
              font-(--font-playfair)
              text-5xl
            "
          >
            Choose Your Space
          </h2>

          <p
            className="
              mt-8
              text-lg
              leading-9
              text-(--muted)
            "
          >
            However you love to connect,
            there's a place for you inside
            The Styled Edit.
          </p>

        </div>

        {/* COMMUNITY */}

        <div className="mt-20">

          <h3
            className="
              mb-8
              text-xs
              uppercase
              tracking-[0.3em]
              text-(--primary)
            "
          >
            Join Our Community
          </h3>

          <div className="grid gap-8 md:grid-cols-3">

            {community.map((channel) => {

              const Icon =
                icons[channel.name as keyof typeof icons];

              return (

                <Link
                  key={channel.name}
                  href={channel.link}
                  target="_blank"
                  className="
                    group
                    rounded-4xl
                    border
                    border-(--border)
                    bg-white
                    p-10
                    transition-all
                    duration-300
                    hover:-translate-y-2
                    hover:shadow-xl
                  "
                >

                  <Icon
                    size={34}
                    className="text-(--primary)"
                  />

                  <h4
                    className="
                      mt-8
                      font-(--font-playfair)
                      text-3xl
                    "
                  >
                    {channel.name}
                  </h4>

                  <p
                    className="
                      mt-5
                      leading-8
                      text-(--muted)
                    "
                  >
                    {channel.description}
                  </p>

                  <div
                    className="
                      mt-8
                      flex
                      items-center
                      gap-2
                      text-sm
                      uppercase
                      tracking-[0.25em]
                      text-(--primary)
                    "
                  >
                    {channel.cta}

                    <ArrowUpRight
                      size={18}
                      className="
                        transition-transform
                        duration-300
                        group-hover:translate-x-1
                        group-hover:-translate-y-1
                      "
                    />

                  </div>

                </Link>

              );

            })}

          </div>

        </div>

        {/* SOCIALS */}

        <div className="mt-24">

          <h3
            className="
              mb-8
              text-xs
              uppercase
              tracking-[0.3em]
              text-(--primary)
            "
          >
            Follow Our Journey
          </h3>

          <div className="grid gap-8 md:grid-cols-3">

            {socials.map((channel) => {

              const Icon =
                icons[channel.name as keyof typeof icons];

              return (

                <Link
                  key={channel.name}
                  href={channel.link}
                  target="_blank"
                  className="
                    group
                    rounded-4xl
                    bg-(--surface)
                    p-10
                    transition-all
                    duration-300
                    hover:-translate-y-2
                    hover:shadow-xl
                  "
                >

                  <Icon
                    size={34}
                    className="text-(--primary)"
                  />

                  <h4
                    className="
                      mt-8
                      font-(--font-playfair)
                      text-3xl
                    "
                  >
                    {channel.name}
                  </h4>

                  <p
                    className="
                      mt-5
                      leading-8
                      text-(--muted)
                    "
                  >
                    {channel.description}
                  </p>

                  <div
                    className="
                      mt-8
                      flex
                      items-center
                      gap-2
                      text-sm
                      uppercase
                      tracking-[0.25em]
                      text-(--primary)
                    "
                  >
                    {channel.cta}

                    <ArrowUpRight
                      size={18}
                      className="
                        transition-transform
                        duration-300
                        group-hover:translate-x-1
                        group-hover:-translate-y-1
                      "
                    />

                  </div>

                </Link>

              );

            })}

          </div>

        </div>

      </div>

    </section>
  );
}