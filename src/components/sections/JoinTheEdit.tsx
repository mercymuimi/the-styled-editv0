"use client";

import Container from "@/components/ui/Container";
import FadeUp from "@/components/animations/FadeUp";

export default function JoinTheEdit() {
return ( <section
   id="newsletter"
   className="border-t border-(--border) py-32"
 > <Container>

```
    <FadeUp>
      <div
        className="overflow-hidden rounded-[48px] bg-white px-8 py-20 text-center shadow-[0_25px_80px_rgba(0,0,0,0.06)] md:px-16"
      >

        <span
          className="text-sm tracking-[0.35em] text-(--primary)"
        >
          JOIN THE EDIT
        </span>

        <h2
          className="mx-auto mt-6 max-w-4xl font-(--font-playfair) text-5xl leading-none md:text-7xl"
        >
          Become part of
          the conversation.
        </h2>

        <p
          className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-(--muted)"
        >
          Get early access to collection drops,
          styling opportunities, community events
          and editorial stories from The Styled Edit.
        </p>

        {/* BENEFITS */}

        <div
          className="mx-auto mt-12 grid max-w-4xl gap-4 md:grid-cols-4"
        >
          <div className="rounded-full bg-(--surface) px-5 py-3 text-sm">
            Early Collection Access
          </div>

          <div className="rounded-full bg-(--surface) px-5 py-3 text-sm">
            Styling Opportunities
          </div>

          <div className="rounded-full bg-(--surface) px-5 py-3 text-sm">
            Event Invitations
          </div>

          <div className="rounded-full bg-(--surface) px-5 py-3 text-sm">
            Editorial Stories
          </div>
        </div>

        {/* FORM */}

        <form
          className="mx-auto mt-12 flex max-w-2xl flex-col gap-4 md:flex-row"
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 rounded-full border border-(--border) bg-(--background) px-6 py-4 outline-none focus:border-(--primary)"
          />

          <button
            type="submit"
            className="rounded-full bg-(--primary) px-8 py-4 text-white transition-all duration-300 hover:-translate-y-1"
          >
            Join The Edit
          </button>
        </form>

      </div>
    </FadeUp>

  </Container>
</section>
);
}
