// import { QueryClient, QueryClientProvider } from 'react-query';
// import { ReactQueryDevtools } from 'react-query/devtools';
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom';
import { productListLoader, productDetailsLoader } from './services/';

import { Layout } from './layout';

import ProductDetails from './views/product-details/ProductDetails';
import ProductList from './views/product-list/ProductList';

// const queryClient = new QueryClient({
//   defaultOptions: {
//     queries: {
//       staleTime: Infinity,
//       cacheTime: Infinity,
//     },
//   },
// });

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<Layout />}
      loader={productListLoader}
      errorElement={<>There was ErroR!</>}
    >
      <Route index element={<ProductList />} />
      <Route path="product" index element={<ProductList />} />
      <Route
        path="product/:id"
        element={<ProductDetails />}
        loader={productDetailsLoader}
        errorElement={<>There was ann ErroR!</>}
      />
    </Route>
  )
);

function App() {
  return (
    <>
      {/* <QueryClientProvider client={queryClient}> */}
      <RouterProvider router={router} />
      {/* <ReactQueryDevtools initialIsOpen={false} position="bottom-right" /> */}
      {/* </QueryClientProvider> */}
    </>
  );
}

export default App;
