import './ProductImage.scss';

const ProductImage = ({ imgUrl, altText }) => {
  return (
    <img
      className="product-image"
      src={imgUrl}
      alt={altText}
      loading="lazy"
      height="100%"
      width="350px"
    />
  );
};

export default ProductImage;
