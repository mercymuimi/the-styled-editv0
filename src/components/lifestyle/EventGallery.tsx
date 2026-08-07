import Image from "next/image";

const gallery = [
  "/images/extra1.jpg",
  "/images/extra2.jpg",
  "/images/extra3.jpg",
  "/images/extra4.jpg",
  "/images/extra1.jpg",
];

export default function EventGallery() {
  return (
    <section className="pb-32">

      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16">

          <p
            className="
              text-xs
              uppercase
              tracking-[0.35em]
              text-(--primary)
            "
          >
            Gallery
          </p>

          <h2
            className="
              mt-4
              font-(--font-playfair)
              text-5xl
            "
          >
            Moments We've Shared
          </h2>

          <p
            className="
              mt-6
              max-w-2xl
              text-lg
              leading-9
              text-(--muted)
            "
          >
            Every event is built around creativity,
            connection and celebrating personal style.
          </p>

        </div>

        <div
          className="
            grid
            gap-6
            md:grid-cols-12
            auto-rows-[220px]
          "
        >

          {/* Large */}

          <div
            className="
              relative
              md:col-span-7
              md:row-span-2
              overflow-hidden
              rounded-4xl
            "
          >
            <Image
              src={gallery[0]}
              alt=""
              fill
              className="
                object-cover
                transition
                duration-700
                hover:scale-105
              "
            />
          </div>

          {/* Top Right */}

          <div
            className="
              relative
              md:col-span-5
              overflow-hidden
              rounded-4xl
            "
          >
            <Image
              src={gallery[1]}
              alt=""
              fill
              className="
                object-cover
                transition
                duration-700
                hover:scale-105
              "
            />
          </div>

          {/* Middle */}

          <div
            className="
              relative
              md:col-span-5
              overflow-hidden
              rounded-4xl
            "
          >
            <Image
              src={gallery[2]}
              alt=""
              fill
              className="
                object-cover
                transition
                duration-700
                hover:scale-105
              "
            />
          </div>

          {/* Bottom Left */}

          <div
            className="
              relative
              md:col-span-4
              overflow-hidden
              rounded-4xl
            "
          >
            <Image
              src={gallery[3]}
              alt=""
              fill
              className="
                object-cover
                transition
                duration-700
                hover:scale-105
              "
            />
          </div>

          {/* Bottom Right */}

          <div
            className="
              relative
              md:col-span-8
              overflow-hidden
              rounded-4xl
            "
          >
            <Image
              src={gallery[4]}
              alt=""
              fill
              className="
                object-cover
                transition
                duration-700
                hover:scale-105
              "
            />
          </div>

        </div>

      </div>

    </section>
  );
}
