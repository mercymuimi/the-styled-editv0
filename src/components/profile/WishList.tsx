import ProductCard from "@/components/products/ProductCard";
import { products } from "@/data/products";

export default function Wishlist() {
  return (
    <section className="pb-24">

      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-10">

          <p className="text-xs uppercase tracking-[0.35em] text-(--primary)">
            Wishlist
          </p>

          <h2 className="mt-4 font-(--font-playfair) text-4xl">
            Saved Pieces
          </h2>

        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {products.slice(0,3).map((product)=>(

            <ProductCard
              key={product.id}
              product={product}
            />

          ))}

        </div>

      </div>

    </section>
  );
}
