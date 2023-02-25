import { useEffect } from 'react';
import { useLoaderData, useOutletContext } from 'react-router-dom';

import ProductDescription from './ProductDescription';
import ProductImage from './ProductImage';
import ProductActions from './ProductActions';

const ProductDetails = () => {
  const { setProductModel, addToCartMutation } = useOutletContext();
  const productDetails = useLoaderData();

  useEffect(() => {
    setProductModel(productDetails.model);
  }, [productDetails, setProductModel]);

  return (
    <>
      <ProductImage imgUrl={productDetails.imgUrl} />
      <ProductDescription product={productDetails} />
      <ProductActions
        addToCartMutation={addToCartMutation}
        cartOptions={{
          id: productDetails.id,
          colors: productDetails.options.colors,
          storages: productDetails.options.storages,
        }}
      />
    </>
  );
};

export default ProductDetails;
