"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Users,
  MessageCircle,
  ExternalLink,
  ChevronRight,
  Check,
} from "lucide-react";

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        stroke="currentColor"
        strokeWidth="1.8"
      />

      <circle
        cx="12"
        cy="12"
        r="4"
        stroke="currentColor"
        strokeWidth="1.8"
      />

      <circle
        cx="17.5"
        cy="6.5"
        r="1"
        fill="currentColor"
      />
    </svg>
  );
}

export default function CommunitySettings() {
  const [communityUpdates, setCommunityUpdates] = useState(true);
  const [eventUpdates, setEventUpdates] = useState(true);
  const [styleUpdates, setStyleUpdates] = useState(true);

  return (
    <section className="mx-auto w-full max-w-5xl px-6">
      <div className="border border-(--border) bg-(--surface)">
        {/* Header */}
        <div className="border-b border-(--border) px-6 py-6 sm:px-8">
          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-(--primary)/10 text-(--primary)">
              <Users size={20} strokeWidth={1.6} />
            </div>

            <div>
              <p className="text-[10px] uppercase tracking-[0.25em] text-(--primary)">
                Community
              </p>

              <h2 className="mt-1 font-(--font-playfair) text-2xl text-(--foreground)">
                Your TSE Community
              </h2>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-(--muted)">
                Stay connected to The Styled Edit community, discover
                upcoming experiences, and choose the kind of updates you
                would like to receive.
              </p>
            </div>
          </div>
        </div>

        {/* Community Links */}
        <div className="border-b border-(--border)">
          <div className="px-6 py-5 sm:px-8">
            <p className="text-[10px] uppercase tracking-[0.22em] text-(--muted)">
              Connect with us
            </p>

            <div className="mt-4 divide-y divide-(--border) border-y border-(--border)">
              {/* WhatsApp */}
              <a
                href="https://chat.whatsapp.com/DZGoBCqjN2yF5Fdef3DRRm"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between py-5 transition-colors hover:bg-(--background)"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-(--foreground)/5 text-(--foreground)">
                    <MessageCircle
                      size={19}
                      strokeWidth={1.6}
                    />
                  </div>

                  <div>
                    <p className="text-sm font-medium text-(--foreground)">
                      TSE WhatsApp Community
                    </p>

                    <p className="mt-1 text-xs text-(--muted)">
                      Join the conversation, updates and community moments.
                    </p>
                  </div>
                </div>

                <ExternalLink
                  size={16}
                  className="text-(--muted) transition-transform group-hover:translate-x-0.5"
                />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between py-5 transition-colors hover:bg-(--background)"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-(--foreground)/5 text-(--foreground)">
                    <InstagramIcon />
                  </div>

                  <div>
                    <p className="text-sm font-medium text-(--foreground)">
                      Instagram
                    </p>

                    <p className="mt-1 text-xs text-(--muted)">
                      Follow TSE for styling inspiration and new drops.
                    </p>
                  </div>
                </div>

                <ExternalLink
                  size={16}
                  className="text-(--muted) transition-transform group-hover:translate-x-0.5"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Preferences */}
        <div className="border-b border-(--border) px-6 py-6 sm:px-8">
          <div className="mb-5">
            <p className="text-[10px] uppercase tracking-[0.22em] text-(--primary)">
              Community preferences
            </p>

            <h3 className="mt-1 font-(--font-playfair) text-xl text-(--foreground)">
              What would you like to hear about?
            </h3>
          </div>

          <div className="divide-y divide-(--border) border-y border-(--border)">
            {/* Community updates */}
            <PreferenceRow
              title="Community updates"
              description="News, conversations and moments happening around TSE."
              checked={communityUpdates}
              onChange={() =>
                setCommunityUpdates((value) => !value)
              }
            />

            {/* Events */}
            <PreferenceRow
              title="Events & experiences"
              description="Be the first to know about Style & Splash and other TSE experiences."
              checked={eventUpdates}
              onChange={() =>
                setEventUpdates((value) => !value)
              }
            />

            {/* Styling */}
            <PreferenceRow
              title="Style & fashion updates"
              description="Styling inspiration, curated edits and fashion drops."
              checked={styleUpdates}
              onChange={() =>
                setStyleUpdates((value) => !value)
              }
            />
          </div>
        </div>

        {/* Community Page */}
        <div className="px-6 py-6 sm:px-8">
          <Link
            href="/community"
            className="group flex items-center justify-between rounded-xl border border-(--border) px-5 py-4 transition-all duration-300 hover:border-(--primary)/40 hover:bg-(--background)"
          >
            <div>
              <p className="text-sm font-medium text-(--foreground)">
                Explore the TSE Community
              </p>

              <p className="mt-1 text-xs text-(--muted)">
                Discover conversations, stories, events and shared moments.
              </p>
            </div>

            <ChevronRight
              size={18}
              className="text-(--muted) transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}

type PreferenceRowProps = {
  title: string;
  description: string;
  checked: boolean;
  onChange: () => void;
};

function PreferenceRow({
  title,
  description,
  checked,
  onChange,
}: PreferenceRowProps) {
  return (
    <button
      type="button"
      onClick={onChange}
      className="flex w-full items-center justify-between gap-6 py-5 text-left transition-colors hover:bg-(--background)"
    >
      <div>
        <p className="text-sm font-medium text-(--foreground)">
          {title}
        </p>

        <p className="mt-1 max-w-xl text-xs leading-5 text-(--muted)">
          {description}
        </p>
      </div>

      <span
        className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border transition-all duration-200 ${
          checked
            ? "border-(--primary) bg-(--primary) text-white"
            : "border-(--border) bg-transparent text-transparent"
        }`}
        aria-hidden="true"
      >
        <Check size={13} strokeWidth={2.5} />
      </span>
    </button>
  );
}