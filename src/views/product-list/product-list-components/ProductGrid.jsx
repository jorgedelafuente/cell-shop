import ProductCard from './ProductCard';
import './ProductGrid.scss';

const ProductGrid = ({ products }) => {
  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;
