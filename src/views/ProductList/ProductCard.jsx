import { Link } from 'react-router-dom';
import './ProductCard.scss';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`}>
        <div>{product.brand}</div>
        <div>{product.model}</div>
        <div>{product.price}</div>
        <img alt={product.model} src={product.imgUrl} />
      </Link>
    </div>
  );
};

export default ProductCard;
