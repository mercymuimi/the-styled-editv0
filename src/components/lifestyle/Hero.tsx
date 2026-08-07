import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="pt-40 pb-28">

      <div className="mx-auto grid max-w-7xl items-center gap-20 px-6 lg:grid-cols-2">

        {/* LEFT */}

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
            Lifestyle
          </p>

          <h1
            className="
              font-(--font-playfair)
              text-6xl
              leading-[0.95]
              md:text-7xl
            "
          >
            More Than Fashion.
            <br />
            A Community
            <br />
            Built Around Style.
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
            Discover experiences, styling events,
            creative conversations and a growing
            community where fashion becomes a way
            to connect, create and inspire.
          </p>

          <div className="mt-12 flex flex-wrap gap-5">

            <Link
              href="#experiences"
              className="
                rounded-full
                bg-(--primary)
                px-8
                py-4
                text-sm
                uppercase
                tracking-[0.25em]
                text-white
                transition
                hover:opacity-90
              "
            >
              Explore Experiences
            </Link>

            <Link
              href="/community"
              className="
                rounded-full
                border
                border-(--border)
                px-8
                py-4
                text-sm
                uppercase
                tracking-[0.25em]
                transition
                hover:bg-(--surface)
              "
            >
              Join Community
            </Link>

          </div>

        </div>

        {/* RIGHT */}

        <div className="relative">

          <div className="relative aspect-4/5 overflow-hidden rounded-4xl">

            <Image
              src="/images/extra12.jpg"
              alt="Lifestyle"
              fill
              priority
              className="object-cover"
            />

          </div>

          {/* Floating Tag */}

          <div
            className="
              absolute
              -right-8
              top-10
              rotate-6
              rounded-xl
              border
              border-(--border)
              bg-white
              px-8
              py-5
              shadow-lg
            "
          >
            <p className="text-xs uppercase tracking-[0.35em]">
              Community
            </p>

            <p
              className="
                mt-2
                font-(--font-playfair)
                text-3xl
              "
            >
              Vol. 01
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}