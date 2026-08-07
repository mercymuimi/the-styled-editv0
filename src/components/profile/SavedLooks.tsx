import Image from "next/image";

const looks = [
  "/images/extra1.jpg",
  "/images/extra13.jpg",
  "/images/extra18.jpg",
];

export default function SavedLooks() {
  return (
    <section className="pb-24">

      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-10">

          <p className="text-xs uppercase tracking-[0.35em] text-(--primary)">
            Style Inspiration
          </p>

          <h2 className="mt-4 font-(--font-playfair) text-4xl">
            Saved Looks
          </h2>

        </div>

        <div className="grid gap-6 md:grid-cols-3">

          {looks.map((look)=>(

            <div
              key={look}
              className="relative aspect-4/5 overflow-hidden rounded-3xl"
            >

              <Image
                src={look}
                alt="Saved Look"
                fill
                className="object-cover transition duration-700 hover:scale-105"
              />

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}
