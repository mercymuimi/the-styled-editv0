import Image from "next/image";
import Link from "next/link";

export default function ProfileHero() {
  return (
    <section className="mx-auto max-w-7xl px-6">
      <div
        className="
          rounded-[40px]
          border
          border-(--border)
          bg-(--surface)
          p-8
          md:p-10
          md:flex
          md:items-center
          md:justify-between
        "
      >
        {/* Profile information */}
        <div className="flex items-center gap-6">
          <div className="relative h-24 w-24 overflow-hidden rounded-full md:h-28 md:w-28">
            <Image
              src="/images/founder.jpg"
              alt="Mercy's profile"
              fill
              sizes="112px"
              className="object-cover"
              priority
            />
          </div>

          <div>
            <p
              className="
                text-xs
                uppercase
                tracking-[0.35em]
                text-(--primary)
              "
            >
              Welcome Back
            </p>

            <h1
              className="
                mt-3
                font-(--font-playfair)
                text-3xl
                md:text-4xl
              "
            >
              Mercy 👋
            </h1>

            <p className="mt-3 text-sm text-(--muted)">
              Member since July 2026
            </p>
          </div>
        </div>

        {/* Edit Profile */}
        <Link
          href="/profile/edit"
          className="
            mt-8
            inline-flex
            items-center
            justify-center
            rounded-full
            bg-(--primary)
            px-8
            py-4
            text-sm
            uppercase
            tracking-[0.25em]
            text-white
            transition
            duration-300
            hover:opacity-90
            md:mt-0
          "
        >
          Edit Profile
        </Link>
      </div>
    </section>
  );
}