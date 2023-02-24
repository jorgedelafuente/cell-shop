import { useEffect } from 'react';
import { useLoaderData, useOutletContext } from 'react-router-dom';

import ProductDescription from './ProductDescription';
import ProductImage from './ProductImage';
import ProductActions from './ProductActions';

const ProductDetails = () => {
  const { cart, setCart, setProductModel } = useOutletContext();
  const productDetails = useLoaderData();

  useEffect(() => {
    setProductModel(productDetails.model);
  }, [productDetails, setProductModel]);

  return (
    <>
      <ProductImage imgUrl={productDetails.imgUrl} />
      <ProductDescription product={productDetails} />
      <ProductActions
        cart={cart}
        setCart={setCart}
        productActions={productDetails.options}
        productId={productDetails.id}
      />
    </>
  );
};

export default ProductDetails;
