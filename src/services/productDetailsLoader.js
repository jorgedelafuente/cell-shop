export const productDetailsLoader = async ({ params }) => {
  const { id } = params;

  const res = await fetch(
    'https://itx-frontend-test.onrender.com/api/product/' + id
  );

  if (!res.ok) {
    throw Error('Could not find that product.');
  }

  return res.json();
};
