"use client";

import Image from "next/image";

export interface CartProduct {
  id: string;
  name: string;
  image: string;
  price: number;
  size: string;
  quantity: number;
}

interface CartItemProps {
  product: CartProduct;
  onIncrease: (id: string) => void;
  onDecrease: (id: string) => void;
  onRemove: (id: string) => void;
}

export default function CartItem({
  product,
  onIncrease,
  onDecrease,
  onRemove,
}: CartItemProps) {
  return (
    <article className="flex gap-5 border-b border-(--border) py-8 first:pt-0">
      {/* Product Image */}
      <div className="relative h-32 w-28 shrink-0 overflow-hidden rounded-2xl bg-(--surface) sm:h-40 sm:w-32">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 112px, 128px"
          className="object-cover"
        />
      </div>

      {/* Product Details */}
      <div className="flex min-w-0 flex-1 flex-col justify-between">
        <div>
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="font-(--font-playfair) text-xl">
                {product.name}
              </h3>

              <p className="mt-2 text-sm text-(--muted)">
                Size: {product.size}
              </p>
            </div>

            <p className="shrink-0 text-sm font-medium">
              KSh {product.price.toLocaleString()}
            </p>
          </div>
        </div>

        {/* Controls */}
        <div className="mt-5 flex items-center justify-between">
          <div className="flex items-center rounded-full border border-(--border)">
            <button
              type="button"
              onClick={() => onDecrease(product.id)}
              aria-label={`Decrease quantity of ${product.name}`}
              className="flex h-9 w-9 items-center justify-center text-lg transition hover:text-(--primary)"
            >
              −
            </button>

            <span className="w-8 text-center text-sm">
              {product.quantity}
            </span>

            <button
              type="button"
              onClick={() => onIncrease(product.id)}
              aria-label={`Increase quantity of ${product.name}`}
              className="flex h-9 w-9 items-center justify-center text-lg transition hover:text-(--primary)"
            >
              +
            </button>
          </div>

          <button
            type="button"
            onClick={() => onRemove(product.id)}
            className="text-xs uppercase tracking-[0.15em] text-(--muted) transition hover:text-red-500"
          >
            Remove
          </button>
        </div>
      </div>
    </article>
  );
}
