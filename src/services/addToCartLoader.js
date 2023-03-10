import axios from 'axios';
import { baseUrl } from '.';

const addToCartService = async ({ id, colorCode, storageCode }) => {
  try {
    const { data } = await axios.post(`${baseUrl}/cart`, {
      id,
      colorCode,
      storageCode,
    });

    return data;
  } catch (error) {
    throw Error('Could not add to Cart. Try again another time.');
  }
};

const addToCartMutationConfig = (params) => ({
  queryKey: ['addToCart', params.id, params.colorCode, params.storageCode],
  queryFn: () => addToCartService(params),
});

export const addToCartLoader = (queryClient) => async (params) => {
  if (
    !queryClient.getQueryData([
      ['addToCart', params.id, params.colorCode, params.storageCode],
    ])
  ) {
    return await queryClient.fetchQuery(addToCartMutationConfig(params));
  } else {
    return queryClient.getQueryData([
      ['addToCart', params.id, params.colorCode, params.storageCode],
    ]);
  }
};
