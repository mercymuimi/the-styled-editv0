"use client";

import { useState } from "react";
import { Bell } from "lucide-react";

const notifications = [
  {
    id: "drops",
    title: "New Drops",
    description: "Be the first to know when new pieces arrive.",
  },
  {
    id: "community",
    title: "Community Updates",
    description: "Receive updates about TSE community activities.",
  },
  {
    id: "events",
    title: "Events & Experiences",
    description: "Get reminders about upcoming TSE events.",
  },
  {
    id: "offers",
    title: "Offers & Promotions",
    description: "Hear about special offers and exclusive drops.",
  },
];

export default function NotificationSettings() {
  const [enabled, setEnabled] = useState<Record<string, boolean>>({
    drops: true,
    community: true,
    events: true,
    offers: false,
  });

  return (
    <section>
      <div className="mx-auto max-w-5xl px-6">
        <div className="rounded-3xl border border-(--border) bg-(--surface) p-6 sm:p-8">

          <div className="mb-8">
            <p className="text-xs uppercase tracking-[0.25em] text-(--primary)">
              Stay Connected
            </p>

            <h2 className="mt-2 font-(--font-playfair) text-2xl">
              Notifications
            </h2>

            <p className="mt-2 text-sm text-(--muted)">
              Choose what you would like to hear from TSE about.
            </p>
          </div>

          <div className="space-y-2">

            {notifications.map((item) => {
              const isEnabled = enabled[item.id];

              return (
                <div
                  key={item.id}
                  className="flex items-center justify-between gap-6 rounded-2xl p-4 transition hover:bg-(--background)"
                >
                  <div className="flex items-center gap-4">
                    <div className="rounded-2xl bg-(--background) p-3">
                      <Bell size={17} />
                    </div>

                    <div>
                      <p className="text-sm font-medium">
                        {item.title}
                      </p>

                      <p className="mt-1 text-xs text-(--muted)">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    aria-label={`Toggle ${item.title}`}
                    onClick={() =>
                      setEnabled((current) => ({
                        ...current,
                        [item.id]: !current[item.id],
                      }))
                    }
                    className={`relative h-6 w-11 shrink-0 rounded-full transition ${
                      isEnabled
                        ? "bg-(--primary)"
                        : "bg-(--border)"
                    }`}
                  >
                    <span
                      className={`absolute top-1 h-4 w-4 rounded-full bg-white transition ${
                        isEnabled ? "left-6" : "left-1"
                      }`}
                    />
                  </button>
                </div>
              );
            })}

          </div>
        </div>
      </div>
    </section>
  );
}
