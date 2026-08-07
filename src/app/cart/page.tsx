"use client";

import { useMemo, useState } from "react";

import CartItem, {
  CartProduct,
} from "@/components/cart/CartItem";

import CartSummary from "@/components/cart/CartSummary";
import EmptyCart from "@/components/cart/EmptyCart";

const initialCart: CartProduct[] = [
  {
    id: "vintage-denim",
    name: "Vintage Denim",
    image: "/images/extra13.jpg",
    price: 1800,
    size: "M",
    quantity: 1,
  },
  {
    id: "oversized-blazer",
    name: "Oversized Blazer",
    image: "/images/extra14.jpg",
    price: 2500,
    size: "S",
    quantity: 1,
  },
];

export default function CartPage() {
  const [cart, setCart] = useState<CartProduct[]>(
    initialCart
  );

  function increaseQuantity(id: string) {
    setCart((currentCart) =>
      currentCart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  }

  function decreaseQuantity(id: string) {
    setCart((currentCart) =>
      currentCart
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  function removeItem(id: string) {
    setCart((currentCart) =>
      currentCart.filter((item) => item.id !== id)
    );
  }

  const subtotal = useMemo(() => {
    return cart.reduce(
      (total, item) =>
        total + item.price * item.quantity,
      0
    );
  }, [cart]);

  if (cart.length === 0) {
    return (
      <main className="min-h-screen bg-(--background) px-6 pb-24 pt-32">
        <EmptyCart />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-(--background) px-6 pb-24 pt-32">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-14">
          <p className="text-xs uppercase tracking-[0.35em] text-(--primary)">
            Shopping Bag
          </p>

          <h1 className="mt-4 font-(--font-playfair) text-5xl sm:text-6xl">
            Your Edit
          </h1>

          <p className="mt-4 max-w-lg text-sm leading-7 text-(--muted)">
            Pieces you've selected for your personal
            edit.
          </p>
        </div>

        {/* Cart */}
        <div className="grid gap-12 lg:grid-cols-[1fr_380px] lg:items-start">

          {/* Products */}
          <div>
            <div className="mb-5 flex items-center justify-between">
              <p className="text-xs uppercase tracking-[0.2em] text-(--muted)">
                {cart.reduce(
                  (total, item) =>
                    total + item.quantity,
                  0
                )}{" "}
                {cart.reduce(
                  (total, item) =>
                    total + item.quantity,
                  0
                ) === 1
                  ? "Item"
                  : "Items"}
              </p>
            </div>

            <div className="rounded-4xl border border-(--border) bg-white p-6 sm:p-8">
              {cart.map((product) => (
                <CartItem
                  key={product.id}
                  product={product}
                  onIncrease={increaseQuantity}
                  onDecrease={decreaseQuantity}
                  onRemove={removeItem}
                />
              ))}
            </div>
          </div>

          {/* Summary */}
          <div className="lg:sticky lg:top-28">
            <CartSummary subtotal={subtotal} />
          </div>

        </div>
      </div>
    </main>
  );
}