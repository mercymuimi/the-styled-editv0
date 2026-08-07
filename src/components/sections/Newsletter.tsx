import Container from "@/components/ui/Container";

export default function Newsletter() {
  return (
    <section
      id="newsletter"
      className="py-24"
    >
      <Container>

        <div className="mx-auto max-w-4xl rounded-4xl bg-(--primary) px-8 py-16 text-center text-white md:px-16">

          <span className="text-sm tracking-[0.2em]">
            JOIN THE COMMUNITY
          </span>

          <h2 className="mt-4 font-(--font-playfair) text-4xl md:text-5xl">
            Stay in the loop.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-white/80">
            Be the first to know about new thrift drops,
            styling opportunities, community events and
            exclusive updates from The Styled Edit.
          </p>

          <form className="mx-auto mt-10 flex max-w-xl flex-col gap-4 sm:flex-row">

            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 rounded-full bg-white px-6 py-4 text-black outline-none"
            />

            <button
              type="submit"
              className="rounded-full bg-black px-8 py-4 font-medium text-white transition hover:opacity-90"
            >
              Subscribe
            </button>

          </form>

        </div>

      </Container>
    </section>
  );
}