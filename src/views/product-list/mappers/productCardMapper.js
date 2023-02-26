export const productCardMapper = (product) => {
  return {
    hydrate: {
      price: product.price !== '' ? `€ ${product.price}` : '€ -',
    },
  };
};
