const orders = [
  {
    id: "#TSE1024",
    item: "Vintage Denim Jacket",
    date: "12 July 2026",
    price: "KSh 3,200",
    status: "Delivered",
  },
  {
    id: "#TSE1025",
    item: "Oversized Blazer",
    date: "18 July 2026",
    price: "KSh 3,900",
    status: "Processing",
  },
];

export default function RecentOrders() {
  return (
    <section className="pb-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-10">
          <p className="text-xs uppercase tracking-[0.35em] text-(--primary)">
            Orders
          </p>

          <h2 className="mt-4 font-(--font-playfair) text-4xl">
            Recent Orders
          </h2>
        </div>

        <div className="space-y-6">

          {orders.map((order) => (

            <div
              key={order.id}
              className="flex flex-col gap-6 rounded-3xl border border-(--border) bg-white p-8 md:flex-row md:items-center md:justify-between"
            >

              <div>
                <h3 className="font-semibold">{order.item}</h3>
                <p className="mt-2 text-sm text-(--muted)">
                  {order.id} • {order.date}
                </p>
              </div>

              <div className="text-right">
                <p className="font-medium">{order.price}</p>

                <span className="mt-2 inline-block rounded-full bg-green-100 px-4 py-2 text-xs uppercase tracking-[0.15em] text-green-700">
                  {order.status}
                </span>
              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}