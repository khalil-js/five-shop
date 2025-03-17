import { useLocation } from "react-router-dom";
import { useState } from "react";

const ProductDetails = () => {
  const { state: product } = useLocation();
  const [mainImage, setMainImage] = useState(product.image);

  return (
    <div className="container">
      <div className="product-gallery">
        <img id="mainImage" src={mainImage} alt="Product Image" />
        <div className="thumbnails">
          {product.thumbnails.map((thumb, index) => (
            <img
              key={index}
              className="thumbnail"
              src={thumb}
              alt="Thumbnail"
              onClick={() => setMainImage(thumb)}
            />
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
