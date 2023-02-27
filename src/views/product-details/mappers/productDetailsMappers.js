export const productDetailsMapper = (product) => {
  return {
    hydrate: {
      brand: `Brand : ${product.brand}`,
      model: `Model : ${product.model}`,
      price:
        product.price !== '' ? `Price : € ${product.price}` : 'Price : € -',
      cpu: `CPU : ${product.cpu}`,
      ram: `RAM : ${product.ram}`,
      os: `OS : ${product.os}`,
      battery:
        product.battery !== ''
          ? `Battery : ${product.battery}`
          : 'Battery : - ',
      primaryCamera: `Camera : ${
        product.primaryCamera.constructor == Array
          ? product.primaryCamera.join(' ')
          : product.primaryCamera
      }`,
      secondaryCamera: `Secondary Camera : ${product.secondaryCmera}`,
      dimentions: `Dimentions : ${product.dimentions}`,
      weight:
        product.weight !== '' ? `Weight : ${product.weight}g` : 'Weight : - ',
    },
  };
};
