import { useQuery } from 'react-query';

import { Layout } from '../../Layout';
import ProductGrid from './ProductGrid';
import SearchBar from './SearchBar';

const ProductList = () => {
  const { isLoading, error, data } = useQuery('products', () =>
    fetch('https://itx-frontend-test.onrender.com/api/product').then((res) =>
      res.json()
    )
  );
  if (isLoading) return 'Loading...';
  if (error) return 'An error has occurred: ' + error.message;

  return (
    <Layout>
      <SearchBar />
      <ProductGrid products={data} />
    </Layout>
  );
};

export default ProductList;
