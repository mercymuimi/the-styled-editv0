import Image from "next/image";

const galleryImages = [
  {
    id: 1,
    src: "/images/extra13.jpg",
    alt: "Styled Edit Community Event",
  },
  {
    id: 2,
    src: "/images/extra14.jpg",
    alt: "Street Style Inspiration",
  },
  {
    id: 3,
    src: "/images/extra11.jpg",
    alt: "Moodboard and Fashion Inspiration",
  },
  {
    id: 4,
    src: "/images/extra16.jpg",
    alt: "Editorial Fashion Shoot",
  },
  {
    id: 5,
    src: "/images/extra1.jpg",
    alt: "Community Style Moment",
  },
  {
    id: 6,
    src: "/images/extra18.jpg",
    alt: "Creative Fashion Portrait",
  },
];

export default function CommunityGallery() {
  return (
    <section className="pb-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Heading */}
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
              leading-relaxed
              text-(--muted)
            "
          >
            Every event, styling session and community meetup creates memories.
            Here's a glimpse into life inside The Styled Edit.
          </p>
        </div>

        {/* Gallery */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="
                relative
                aspect-4/5
                overflow-hidden
                rounded-4xl
                group
              "
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width:768px) 100vw,
                       (max-width:1024px) 50vw,
                       33vw"
                className="
                  object-cover
                  transition-transform
                  duration-700
                  group-hover:scale-105
                "
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}