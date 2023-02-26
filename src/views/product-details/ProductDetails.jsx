import { useEffect } from 'react';
import { useLoaderData, useOutletContext } from 'react-router-dom';
import {
  ProductActions,
  ProductImage,
  ProductDescription,
  ProductDetailsGrid,
} from './product-details-components';

const ProductDetails = () => {
  const { setProductModel, addToCartMutation } = useOutletContext();
  const productDetails = useLoaderData();

  useEffect(() => {
    setProductModel(productDetails.model);
  }, [productDetails, setProductModel]);

  return (
    <ProductDetailsGrid>
      <ProductImage
        imgUrl={productDetails.imgUrl}
        altText={productDetails.model}
      />
      <ProductDescription product={productDetails} />
      <ProductActions
        addToCartMutation={addToCartMutation}
        cartOptions={{
          id: productDetails.id,
          colors: productDetails.options.colors,
          storages: productDetails.options.storages,
        }}
      />
    </ProductDetailsGrid>
  );
};

export default ProductDetails;
