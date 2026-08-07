import ProductCard from "@/components/products/ProductCard";
import { products } from "@/data/products";

export default function FeaturedProducts() {
  return (
    <section className="pb-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Heading */}

        <div className="mb-12">
          <p
            className="
              text-xs
              uppercase
              tracking-[0.35em]
              text-(--primary)
            "
          >
            Editor's Picks
          </p>

          <h2
            className="
              mt-4
              font-(--font-playfair)
              text-5xl
              leading-tight
            "
          >
            Discover Our
            <br />
            Favourite Pieces
          </h2>

          <p
            className="
              mt-6
              max-w-2xl
              text-lg
              leading-relaxed
              text-(--muted)
            "
          >
            Explore a curated selection of timeless thrift finds,
            wardrobe essentials and statement pieces handpicked by
            The Styled Edit.
          </p>
        </div>

        {/* Products */}

        <div
          className="
            grid
            gap-8
            md:grid-cols-2
            xl:grid-cols-3
          "
        >
          {products.map((product) => (
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