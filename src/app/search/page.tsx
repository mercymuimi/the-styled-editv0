import Hero from "@/components/search/Hero";
import SearchBar from "@/components/search/SearchBar";
import TrendingSearches from "@/components/search/TrendingSearches";
import BrowseCategories from "@/components/search/BrowseCategories";
import FeaturedProducts from "@/components/search/FeaturedProducts";

export default function SearchPage() {
  return (
    <main>
      <Hero />
      <SearchBar />
      <TrendingSearches />
      <BrowseCategories />
      <FeaturedProducts />
    </main>
  );
}
