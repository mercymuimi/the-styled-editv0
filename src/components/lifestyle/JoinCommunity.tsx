import Link from "next/link";

export default function JoinCommunity() {
  return (
    <section className="pb-40">

      <div className="mx-auto max-w-7xl px-6">

        <div
          className="
            overflow-hidden
            rounded-[3rem]
            bg-(--primary)
            px-8
            py-24
            text-center
            text-white
            md:px-20
          "
        >

          <p
            className="
              text-xs
              uppercase
              tracking-[0.35em]
              text-white/70
            "
          >
            Join The Community
          </p>

          <h2
            className="
              mt-6
              font-(--font-playfair)
              text-5xl
              leading-tight
              md:text-7xl
            "
          >
            Fashion Is Better
            <br />
            When Shared.
          </h2>

          <p
            className="
              mx-auto
              mt-8
              max-w-2xl
              text-lg
              leading-9
              text-white/80
            "
          >
            Become part of a growing community that celebrates
            confidence, creativity and personal style through
            unforgettable experiences, styling sessions and
            meaningful connections.
          </p>

          <div
            className="
              mt-14
              flex
              flex-wrap
              justify-center
              gap-5
            "
          >

            <Link
              href="https://chat.whatsapp.com/DZGoBCqjN2yF5Fdef3DRRm"
              target="_blank"
              className="
                rounded-full
                bg-white
                px-8
                py-4
                text-sm
                font-medium
                uppercase
                tracking-[0.25em]
                text-(--primary)
                transition
                hover:scale-105
              "
            >
              Join WhatsApp Community
            </Link>

            <Link
              href="/styling"
              className="
                rounded-full
                border
                border-white/30
                px-8
                py-4
                text-sm
                uppercase
                tracking-[0.25em]
                transition
                hover:bg-white/10
              "
            >
              Book Styling
            </Link>

          </div>

        </div>

      </div>

    </section>
  );
}
