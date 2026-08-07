const stats = [
  {
    title: "Orders",
    value: "12",
  },
  {
    title: "Wishlist",
    value: "18",
  },
  {
    title: "Saved Looks",
    value: "7",
  },
  {
    title: "Community",
    value: "Member",
  },
];

export default function QuickStats() {
  return (
    <section className="pb-24">

      <div className="mx-auto max-w-7xl px-6">

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          {stats.map((item) => (

            <div
              key={item.title}
              className="
                rounded-3xl
                border
                border-(--border)
                bg-white
                p-8
              "
            >

              <p className="text-(--muted)">
                {item.title}
              </p>

              <h2
                className="
                  mt-4
                  font-(--font-playfair)
                  text-5xl
                "
              >
                {item.value}
              </h2>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}
