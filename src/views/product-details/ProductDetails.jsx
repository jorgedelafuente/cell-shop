import { useEffect } from 'react';
import { useLoaderData, useOutletContext, Link } from 'react-router-dom';
import {
  ProductActions,
  ProductImage,
  ProductDescription,
  ProductDetailsGrid,
} from './components';

const ProductDetails = () => {
  const { setProductModel, addToCartMutation } = useOutletContext();
  const productDetails = useLoaderData();

  useEffect(() => {
    setProductModel(productDetails.model);
  }, [productDetails, setProductModel]);

  return (
    <>
      <Link to={'/'}>Return to Products List</Link>
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
    </>
  );
};

export default ProductDetails;
