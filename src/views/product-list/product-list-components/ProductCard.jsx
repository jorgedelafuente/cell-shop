import { Link } from 'react-router-dom';
import './ProductCard.scss';

const productCardMapper = (product) => {
  return {
    hydrate: {
      price: product.price !== '' ? `€ ${product.price}` : '€ -',
    },
  };
};

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
