import './ProductDescription.scss';
import { productDetailsMapper } from '../mappers/productDetailsMappers';

const ProductDescription = ({ product }) => {
  const {
    brand,
    model,
    price,
    cpu,
    ram,
    os,
    battery,
    primaryCamera,
    secondaryCamera,
    dimentions,
    weight,
  } = productDetailsMapper(product).hydrate;
  return (
    <div className="product-description ">
      <div>{brand}</div>
      <div>{model}</div>
      <div>{price}</div>
      <div>{cpu}</div>
      <div>{ram}</div>
      <div>{os}</div>
      <div>{battery}</div>
      <div>
        <div>{primaryCamera}</div>
        <div>{secondaryCamera}</div>
      </div>
      <div>{weight}</div>
      <div>{dimentions}</div>
    </div>
  );
};

export default ProductDescription;
