"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

import { heroLooks } from "@/data/herolooks";

export default function HeroLookCarousel() {
  const [current, setCurrent] = useState(0);

  const look = heroLooks[current];

  const previous = () => {
    setCurrent((prev) =>
      prev === 0 ? heroLooks.length - 1 : prev - 1
    );
  };

  const next = () => {
    setCurrent((prev) =>
      prev === heroLooks.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="w-full">
      {/* IMAGE FRAME */}
      <div className="group relative overflow-visible">
        <AnimatePresence mode="wait">
          <motion.div
            key={look.id}
            initial={{ opacity: 0, scale: 1.015 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.99 }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
            }}
            className="relative overflow-hidden"
          >
            {/* IMAGE — viewport-relative height capped, so it doesn't crop
                awkwardly on tall/narrow phone screens */}
            <Image
              src={look.image}
              alt={look.title}
              width={1200}
              height={1500}
              priority={current === 0}
              className="h-[58vh] max-h-140 w-full object-cover transition-transform duration-1000 group-hover:scale-[1.02] sm:h-130 md:h-145"
            />

            {/* TOP LABEL — now the look's actual name, not a bare number.
                These four looks aren't a real sequence, so the name carries
                more information than "Look 03" would. */}
            <div className="absolute left-3 top-3 z-20 max-w-[70%] bg-(--background)/90 px-3 py-2 backdrop-blur-sm sm:left-4 sm:top-4 sm:px-4">
              <span className="text-[9px] uppercase tracking-[0.3em] text-(--foreground)">
                {look.title}
              </span>
            </div>

            {/* BOTTOM GRADIENT */}
            <div className="absolute inset-x-0 bottom-0 h-2/5 bg-linear-to-t from-black/80 via-black/25 to-transparent" />

            {/* LOOK DETAILS */}
            <div className="absolute inset-x-0 bottom-0 z-10 p-5 text-white sm:p-6 md:p-8">
              <div className="mb-3 flex items-center gap-3">
                <span className="h-px w-8 bg-white/70" />

                <span className="text-[9px] uppercase tracking-[0.3em] text-white/70">
                  Featured Look
                </span>
              </div>

              <h2 className="font-(--font-playfair) text-2xl leading-none sm:text-3xl md:text-4xl">
                {look.title}
              </h2>

              <p className="mt-3 max-w-md text-sm leading-relaxed text-white/75">
                {look.description}
              </p>
            </div>

            {/* PREVIOUS — smaller footprint on mobile */}
            <button
              type="button"
              onClick={previous}
              aria-label="Previous look"
              className="absolute left-3 top-1/2 z-30 flex h-8 w-8 -translate-y-1/2 items-center justify-center border border-white/30 bg-black/10 text-xl font-light text-white backdrop-blur-sm transition-all duration-300 hover:border-white hover:bg-white hover:text-black sm:left-4 sm:h-10 sm:w-10 sm:text-2xl"
            >
              ‹
            </button>

            {/* NEXT */}
            <button
              type="button"
              onClick={next}
              aria-label="Next look"
              className="absolute right-3 top-1/2 z-30 flex h-8 w-8 -translate-y-1/2 items-center justify-center border border-white/30 bg-black/10 text-xl font-light text-white backdrop-blur-sm transition-all duration-300 hover:border-white hover:bg-white hover:text-black sm:right-4 sm:h-10 sm:w-10 sm:text-2xl"
            >
              ›
            </button>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* META BELOW IMAGE */}
      <div className="mt-5">
        <div className="flex flex-wrap items-center justify-between gap-4">
          {/* COUNTER — pure position indicator, not a claimed sequence */}
          <div className="flex items-center gap-3">
            <span className="text-[9px] uppercase tracking-[0.3em] text-(--foreground)">
              {look.number}
            </span>

            <span className="h-px w-8 bg-(--primary)" />

            <span className="text-[9px] uppercase tracking-[0.3em] text-(--muted)">
              {String(heroLooks.length).padStart(2, "0")}
            </span>
          </div>

          {/* VIEW LOOK */}
          <Link
            href={`/edit/${look.editSlug}#${look.lookId}`}
            className="group/link flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-(--foreground)"
          >
            View the look

            <ArrowUpRight
              size={13}
              strokeWidth={1.5}
              className="transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
            />
          </Link>
        </div>

        {/* PROGRESS — accent color on active bar gives the secondary
            palette note a small, purposeful moment */}
        <div className="mt-5 flex gap-2">
          {heroLooks.map((item, index) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setCurrent(index)}
              aria-label={`Go to ${item.title}`}
              className="h-px flex-1 bg-(--foreground)/10"
            >
              <span
                className={`block h-full transition-all duration-500 ${
                  index === current
                    ? "bg-(--accent)"
                    : "bg-transparent"
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}