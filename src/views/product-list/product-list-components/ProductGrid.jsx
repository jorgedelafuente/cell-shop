import ProductCard from './ProductCard';
import './ProductGrid.scss';

const ProductGrid = ({ productList }) => {
  return (
    <>
      {productList.length ? (
        <div className="products-container">
          {productList.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="products-error">
          <span>No Products found.</span>
        </div>
      )}
    </>
  );
};

export default ProductGrid;
