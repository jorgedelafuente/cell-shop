import axios from 'axios';

export const addToCartService = async ({ id, colorCode, storageCode }) => {
  try {
    const { data } = await axios.post(
      'https://itx-frontend-test.onrender.com/api/cart',
      {
        id,
        colorCode,
        storageCode,
      }
    );

    return data;
  } catch (error) {
    throw Error('Could not add to Cart. Try again another time.');
  }
};
