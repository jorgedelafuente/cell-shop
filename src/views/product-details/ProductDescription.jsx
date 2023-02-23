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
        <div>{product.primaryCamera.join(' ')}</div>
        <div>{product.secondaryCmera}</div>
      </div>

      <div>{product.dimentions}</div>
      <div>{product.weight}</div>
    </div>
  );
};

export default ProductDescription;
