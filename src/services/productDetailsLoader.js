export const productDetailsFetcher = async (params) => {
  const res = await fetch(
    'https://itx-frontend-test.onrender.com/api/product/' + params
  );

  if (!res.ok) {
    throw Error('Could not find that product.');
  }

  return res.json();
};

const productDetailsQuery = (params) => ({
  queryKey: ['productDetails', params],
  queryFn: () => productDetailsFetcher(params),
});

export const productDetailsLoader =
  (queryClient) =>
  async ({ request }) => {
    const params = request.url.split('/').at(-1);
    if (!queryClient.getQueryData(['productDetails', params])) {
      return await queryClient.fetchQuery(productDetailsQuery(params));
    } else return queryClient.getQueryData(['productDetails', params]);
  };
