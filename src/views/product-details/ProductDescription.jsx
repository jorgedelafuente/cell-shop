import './ProductDescription.scss';

const ProductDescription = ({ product }) => {
  return (
    <div className="product-description ">
      <div>{product.brand}</div>
      <div>{product.model}</div>
      <div>{product.price}</div>
      <div>{product.cpu}</div>
      <div>{product.ram}</div>
      <div>{product.os}</div>
      <div>{product.battery}</div>

      <div>
        <div>
          {product.primaryCamera.constructor == Array
            ? product.primaryCamera.join(' ')
            : product.primaryCamera}
        </div>
        <div>{product.secondaryCmera}</div>
      </div>

      <div>{product.dimentions}</div>
      <div>Weight {product.weight}</div>
    </div>
  );
};

export default ProductDescription;
