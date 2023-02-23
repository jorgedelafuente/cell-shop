import './ProductImage.scss';

const ProductImage = ({ imgUrl }) => {
  return <img className="product-image" src={imgUrl} alt="brand" />;
};

export default ProductImage;
