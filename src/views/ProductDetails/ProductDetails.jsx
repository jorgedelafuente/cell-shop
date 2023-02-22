import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';

import { Layout } from '../../Layout';
import ProductDescription from './ProductDescription';
import ProductImage from './ProductImage';
import ProductActions from './ProductActions';

const ProductDetails = () => {
  const { id } = useParams();
  const { isLoading, error, data } = useQuery('productInfo', () =>
    fetch(`https://itx-frontend-test.onrender.com/api/product/${id}`).then(
      (res) => res.json()
    )
  );
  if (isLoading) return 'Loading...';
  if (error) return 'An error has occurred: ' + error.message;

  return (
    <Layout>
      <ProductImage imgUrl={data.imgUrl} />
      <ProductDescription product={data} />
      <ProductActions productActions={data.options} />
    </Layout>
  );
};

export default ProductDetails;
