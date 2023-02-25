import { useLoaderData } from 'react-router-dom';

import { SearchBar, ProductGrid } from './product-list-components/';

const ProductList = () => {
  const productList = useLoaderData();
  return (
    <>
      <SearchBar />
      <ProductGrid products={productList} />
    </>
  );
};

export default ProductList;
