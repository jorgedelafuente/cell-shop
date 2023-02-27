import axios from 'axios';
import { baseUrl } from '.';

const getProductDetails = async (params) => {
  try {
    const { data } = await axios.get(`${baseUrl}/product/${params}`);
    return data;
  } catch (error) {
    throw Error('Could not find that product.');
  }
};

const productDetailsQuery = (params) => ({
  queryKey: ['productDetails', params],
  queryFn: () => getProductDetails(params),
});

export const productDetailsLoader =
  (queryClient) =>
  async ({ request }) => {
    const params = request.url.split('/').at(-1);
    if (!queryClient.getQueryData(['productDetails', params])) {
      return await queryClient.fetchQuery(productDetailsQuery(params));
    } else {
      return queryClient.getQueryData(['productDetails', params]);
    }
  };
