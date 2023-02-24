export const productListFetcher = async () => {
  const res = await fetch(
    'https://itx-frontend-test.onrender.com/api/product/'
  );

  if (!res.ok) {
    throw Error('There was an error fetching data');
  }

  return res.json();
};

const productListQuery = () => ({
  queryKey: 'products',
  queryFn: () => productListFetcher(),
});

export const productListLoader = (queryClient) => async () => {
  if (!queryClient.getQueryData('products')) {
    return await queryClient.fetchQuery(productListQuery());
  } else return queryClient.getQueryData('products');
};
