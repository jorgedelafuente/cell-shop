import { useLoaderData } from 'react-router-dom';

import ProductGrid from './ProductGrid';
import SearchBar from './SearchBar';

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
