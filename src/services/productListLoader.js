import axios from 'axios';

export const getProductList = async () => {
  try {
    const { data } = await axios.get(
      'https://itx-frontend-test.onrender.com/api/product/'
    );
    return data;
  } catch (error) {
    throw Error('Could not get Products.');
  }
};

const productListQuery = () => ({
  queryKey: 'products',
  queryFn: () => getProductList(),
});

export const productListLoader = (queryClient) => async () => {
  if (!queryClient.getQueryData('products')) {
    return await queryClient.fetchQuery(productListQuery());
  } else return queryClient.getQueryData('products');
};
