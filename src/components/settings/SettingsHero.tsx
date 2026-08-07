"use client";

import Link from "next/link";
import { ArrowLeft, Settings } from "lucide-react";

export default function SettingsHero() {
  return (
    <section>
      <div className="mx-auto max-w-5xl px-6">
        {/* Back to Profile */}
        <Link
          href="/profile"
          className="
            inline-flex
            items-center
            gap-2
            text-xs
            uppercase
            tracking-[0.18em]
            text-(--muted)
            transition-colors
            duration-300
            hover:text-(--foreground)
          "
        >
          <ArrowLeft size={15} />
          Back to Profile
        </Link>

        {/* Heading */}
        <div className="mt-10">
          <div
            className="
              flex
              items-center
              gap-3
              text-(--primary)
            "
          >
            <Settings size={17} />

            <p
              className="
                text-xs
                uppercase
                tracking-[0.3em]
              "
            >
              Account
            </p>
          </div>

          <h1
            className="
              mt-4
              font-(--font-playfair)
              text-5xl
              tracking-tight
              md:text-6xl
            "
          >
            Settings
          </h1>

          <p
            className="
              mt-5
              max-w-2xl
              text-sm
              leading-7
              text-(--muted)
              md:text-base
            "
          >
            Manage your account, preferences, notifications,
            and your experience with The Styled Edit.
          </p>
        </div>
      </div>
    </section>
  );
}
