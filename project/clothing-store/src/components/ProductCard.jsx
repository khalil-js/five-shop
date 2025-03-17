import { useNavigate } from "react-router-dom";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product/${product.title}`, { state: { product } });
  };

  return (
    <div className="product-card" onClick={handleClick}>
      <div className="cardimg">
        <img src={product.image} alt={product.title} className="product-img" />
        <div className="product-actions">
          <button className="btn"><img src="/icons/shopping-bag.png" alt="Cart" /></button>
          <button className="btn"><img src="/icons/favourite.png" alt="Favorite" /></button>
        </div>
      </div>
      <div className="product-info">
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <span>{product.price}</span>
      </div>
    </div>
  );
};

export default ProductCard;
