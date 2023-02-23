export const productListLoader = async () => {
  const res = await fetch(
    'https://itx-frontend-test.onrender.com/api/product/'
  );

  if (!res.ok) {
    throw Error('There was an error fetching data');
  }

  return res.json();
};
