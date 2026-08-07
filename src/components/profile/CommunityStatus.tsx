import Link from "next/link";

export default function CommunityStatus() {
  return (
    <section className="pb-24">

      <div className="mx-auto max-w-7xl px-6">

        <div
          className="
            rounded-[40px]
            border
            border-(--border)
            bg-(--surface)
            p-12
          "
        >

          <p className="text-xs uppercase tracking-[0.35em] text-(--primary)">
            Community
          </p>

          <h2 className="mt-4 font-(--font-playfair) text-4xl">
            You're Part of The Styled Edit Family ✨
          </h2>

          <p className="mt-6 max-w-3xl leading-relaxed text-(--muted)">
            Stay inspired through styling sessions, exclusive thrift drops,
            community events and conversations with women who love fashion as
            much as you do.
          </p>

          <Link
            href="/community"
            className="mt-10 inline-flex rounded-full bg-(--primary) px-8 py-4 text-sm uppercase tracking-[0.2em] text-white transition hover:opacity-90"
          >
            Visit Community
          </Link>

        </div>

      </div>

    </section>
  );
}
