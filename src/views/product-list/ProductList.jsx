import { useOutletContext } from 'react-router-dom';

import ProductGrid from './ProductGrid';
import SearchBar from './SearchBar';

const ProductList = () => {
  const { productList } = useOutletContext();
  return (
    <>
      <SearchBar />
      <ProductGrid products={productList} />
    </>
  );
};

export default ProductList;
