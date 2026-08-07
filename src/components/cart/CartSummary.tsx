interface CartSummaryProps {
  subtotal: number;
}

export default function CartSummary({
  subtotal,
}: CartSummaryProps) {
  return (
    <aside className="rounded-4xl border border-(--border) bg-(--surface) p-7 sm:p-8">
      <p className="text-xs uppercase tracking-[0.3em] text-(--primary)">
        Your Order
      </p>

      <h2 className="mt-3 font-(--font-playfair) text-3xl">
        Order Summary
      </h2>

      <div className="mt-8 space-y-4 text-sm">
        <div className="flex items-center justify-between">
          <span className="text-(--muted)">
            Subtotal
          </span>

          <span>
            KSh {subtotal.toLocaleString()}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-(--muted)">
            Delivery
          </span>

          <span className="text-(--muted)">
            Calculated at checkout
          </span>
        </div>
      </div>

      <div className="my-7 h-px bg-(--border)" />

      <div className="flex items-center justify-between">
        <span className="font-medium">
          Total
        </span>

        <span className="font-(--font-playfair) text-2xl">
          KSh {subtotal.toLocaleString()}
        </span>
      </div>

      <button
        type="button"
        className="
          mt-8
          w-full
          rounded-full
          bg-(--primary)
          px-6
          py-4
          text-xs
          uppercase
          tracking-[0.25em]
          text-white
          transition
          hover:opacity-90
        "
      >
        Checkout
      </button>

      <p className="mt-4 text-center text-xs leading-5 text-(--muted)">
        Delivery options and final costs will be
        confirmed at checkout.
      </p>
    </aside>
  );
}
