import './ProductImage.scss';

const ProductImage = ({ imgUrl, altText }) => {
  return <img className="product-image" src={imgUrl} alt={altText} />;
};

export default ProductImage;
