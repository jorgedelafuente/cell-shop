import { useLoaderData } from 'react-router-dom';
import { useState } from 'react';

import { SearchBar, ProductGrid } from './product-list-components/';

const ProductList = () => {
  const productList = useLoaderData();
  const [searcInputText, setSearcInputText] = useState('');
  const filteredProductList = productList.filter((product) => {
    return (
      product.model.toLowerCase().includes(searcInputText) ||
      product.brand.toLowerCase().includes(searcInputText)
    );
  });

  return (
    <>
      <SearchBar
        searcInputText={searcInputText}
        setSearcInputText={setSearcInputText}
      />
      <ProductGrid productList={filteredProductList} />
    </>
  );
};

export default ProductList;
