import { Link } from 'react-router-dom';
import { productCardMapper } from '../mappers/productCardMapper';
import './ProductCard.scss';

const ProductCard = ({ product }) => {
  const { price } = productCardMapper(product).hydrate;
  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`}>
        <img alt={product.model} src={product.imgUrl} />
        <div>{price}</div>
        <div>{product.brand}</div>
        <div>
          <p>{product.model} </p>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
