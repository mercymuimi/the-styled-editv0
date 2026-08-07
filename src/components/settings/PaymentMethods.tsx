import { CreditCard, Plus, Lock } from "lucide-react";

export default function PaymentMethods() {
  return (
    <section>
      <div className="mx-auto max-w-5xl px-6">
        <div className="rounded-3xl border border-(--border) bg-(--surface) p-6 sm:p-8">

          <div className="mb-8">
            <p className="text-xs uppercase tracking-[0.25em] text-(--primary)">
              Checkout
            </p>

            <h2 className="mt-2 font-(--font-playfair) text-2xl">
              Payment Methods
            </h2>

            <p className="mt-2 text-sm text-(--muted)">
              Manage your preferred payment methods.
            </p>
          </div>

          <div className="rounded-2xl border border-dashed border-(--border) p-6 text-center">

            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-(--background)">
              <CreditCard size={20} />
            </div>

            <p className="text-sm font-medium">
              No saved payment methods
            </p>

            <p className="mx-auto mt-2 max-w-sm text-xs leading-6 text-(--muted)">
              Your payment details will be securely managed when
              checkout and payment integration are connected.
            </p>

            <button
              disabled
              className="mt-5 inline-flex cursor-not-allowed items-center gap-2 rounded-full border border-(--border) px-5 py-2.5 text-xs uppercase tracking-[0.15em] opacity-50"
            >
              <Plus size={15} />
              Add Payment Method
            </button>

            <div className="mt-5 flex items-center justify-center gap-2 text-[10px] uppercase tracking-[0.15em] text-(--muted)">
              <Lock size={12} />
              Secure payments
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
