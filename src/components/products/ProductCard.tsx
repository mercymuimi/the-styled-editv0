import Image from "next/image";
import Link from "next/link";

type Product = {
  id: number;
  slug: string;
  name: string;
  category: string;
  price: number;
  image: string;
  badge?: string;
};

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  return (
    <Link
      href={`/edit/${product.slug}`}
      className="group block"
    >
      <article
        className="
          overflow-hidden
          rounded-4xl
          bg-white
          transition
          duration-500
        "
      >
        {/* Product Image */}

        <div className="relative aspect-4/5 overflow-hidden">

          <Image
            src={product.image}
            alt={product.name}
            fill
            className="
              object-cover
              transition-transform
              duration-700
              group-hover:scale-105
            "
          />

          {product.badge && (
            <span
              className="
                absolute
                left-4
                top-4
                rounded-full
                bg-white
                px-4
                py-2
                text-[11px]
                uppercase
                tracking-[0.2em]
              "
            >
              {product.badge}
            </span>
          )}

        </div>

        {/* Product Info */}

        <div className="p-7">

          <p
            className="
              text-xs
              uppercase
              tracking-[0.25em]
              text-(--primary)
            "
          >
            {product.category}
          </p>

          <h3
            className="
              mt-3
              font-(--font-playfair)
              text-2xl
            "
          >
            {product.name}
          </h3>

          <div
            className="
              mt-6
              flex
              items-center
              justify-between
            "
          >
            <span
              className="
                text-lg
                font-medium
              "
            >
              KSh {product.price.toLocaleString()}
            </span>

            <span
              className="
                text-sm
                uppercase
                tracking-[0.2em]
                text-(--primary)
              "
            >
              View →
            </span>

          </div>

        </div>

      </article>
    </Link>
  );
}