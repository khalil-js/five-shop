import { useLocation } from "react-router-dom";
import "./ProductDetails.css";

const ProductDetails = () => {
  const { state } = useLocation();
  const product = state?.product;

  if (!product) return <p>Product not found</p>;

  return (
    <div className="container">
      <div className="product-gallery">
        <img id="mainImage" src={product.image} alt="Product" />
        <div className="thumbnails">
          {product.thumbnails.map((thumb, index) => (
            <img key={index} className="thumbnail" src={thumb} alt="Thumbnail" />
          ))}
        </div>
      </div>
      <div className="product-info">
        <h1>{product.title}</h1>
        <span className="product-price">{product.price}</span>
        <p className="product-description">{product.description}</p>
        <button className="cart-btn1">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductDetails;
