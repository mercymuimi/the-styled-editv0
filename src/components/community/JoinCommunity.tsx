import Link from "next/link";

export default function JoinCommunity() {
  return (
    <section className="pb-40">

      <div className="mx-auto max-w-5xl px-6">

        <div
          className="
            rounded-[3rem]
            bg-(--primary)
            px-10
            py-24
            text-center
            text-white
          "
        >

          <p
            className="
              text-xs
              uppercase
              tracking-[0.35em]
            "
          >
            Ready To Join?
          </p>

          <h2
            className="
              mt-6
              font-(--font-playfair)
              text-6xl
            "
          >
            Your Style Journey
            <br />
            Starts Here.
          </h2>

          <p
            className="
              mx-auto
              mt-10
              max-w-2xl
              text-lg
              leading-9
              text-white/90
            "
          >
            Meet inspiring women, discover your style,
            attend unforgettable events and become
            part of The Styled Edit family.
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
                bg-brown-600
                border
                border-white
                px-8
                py-4
                text-sm
                uppercase
                tracking-[0.25em]
                text-(--primary)
              "
            >
              Join Community
            </Link>

            <Link
              href="/lifestyle"
              className="
                rounded-full
                border
                border-white
                px-8
                py-4
                text-sm
                uppercase
                tracking-[0.25em]
              "
            >
              Explore Events
            </Link>

          </div>

        </div>

      </div>

    </section>
  );
}
