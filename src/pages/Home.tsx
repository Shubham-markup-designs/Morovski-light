import Categories from "../components/categories/categories";
import Banner from "../components/home/Banner";
import Midbanner from "../components/home/Midbanner";
import ProductShowcaseSection from "../components/products/ProductShowcaseSection";
import {
  getBestSellerProducts,
  getFeaturedProducts,
} from "../api/productApi";
import Video from "../components/home/Video";

const Home = () => {
  return (
    <div className="pb-16">
      <Banner />
      <Categories />
      <Video />
      <ProductShowcaseSection
        queryKey="featured-products"
        queryFn={getFeaturedProducts}
        watermark="New Arrivals"
        title="Just Landed"
        description="Precision-engineered LEDs, drivers and architectural fixtures for commercial and residential projects of lasting quality."
        viewAllHref="/new-arrivals"
      />
      <Midbanner />
      <ProductShowcaseSection
        queryKey="best-seller-products"
        queryFn={getBestSellerProducts}
        watermark="Featured Products"
        title="Bestsellers This Season"
        description="Precision-engineered LEDs, drivers and architectural fixtures for commercial and residential projects of lasting quality."
        viewAllHref="/best-sellers"
      />
    </div>
  );
};

export default Home;
