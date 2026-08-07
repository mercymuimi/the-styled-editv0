import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="pt-40 pb-32">

      <div className="mx-auto grid max-w-7xl items-center gap-20 px-6 lg:grid-cols-2">

        {/* Left */}

        <div>

          <p
            className="
              mb-6
              text-xs
              uppercase
              tracking-[0.4em]
              text-(--primary)
            "
          >
            Community
          </p>

          <h1
            className="
              font-(--font-playfair)
              text-6xl
              leading-[0.95]
              md:text-7xl
            "
          >
            Fashion.
            <br />
            Friendship.
            <br />
            Confidence.
          </h1>

          <p
            className="
              mt-10
              max-w-xl
              text-lg
              leading-9
              text-(--muted)
            "
          >
            Join a growing community where women discover
            confidence through style, creativity and
            meaningful connections.
          </p>

          <div className="mt-12 flex flex-wrap gap-5">

            <Link
              href="/community"
              className="
                rounded-full
                bg-(--primary)
                px-8
                py-4
                text-sm
                uppercase
                tracking-[0.25em]
                text-white
              "
            >
              Join Community
            </Link>

            <Link
              href="/lifestyle"
              className="
                rounded-full
                border
                border-(--border)
                px-8
                py-4
                text-sm
                uppercase
                tracking-[0.25em]
              "
            >
              Explore Lifestyle
            </Link>

          </div>

        </div>

        {/* Right */}

        <div className="relative aspect-4/5 overflow-hidden rounded-4xl">

          <Image
            src="/images/event1.jpg"
            alt="Community"
            fill
            priority
            className="object-cover"
          />

        </div>

      </div>

    </section>
  );
}
