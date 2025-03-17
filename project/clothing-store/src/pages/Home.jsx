import ProductCard from "../components/ProductCard";
import { products } from "../data/products";

const Home = () => {
  return (
    <div className="product-container">
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
};

export default Home;
