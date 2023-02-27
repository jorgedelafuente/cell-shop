import './ProductImage.scss';

const ProductImage = ({ imgUrl, altText }) => {
  return (
    <img
      className="product-image"
      src={imgUrl}
      alt={altText}
      loading="lazy"
      width="300px"
    />
  );
};

export default ProductImage;
