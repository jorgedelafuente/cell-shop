import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom';
import { productDetailsLoader, productListLoader } from './services/';

import { Layout } from './layout';

import ProductDetails from './views/product-details/ProductDetails';
import ProductList from './views/product-list/ProductList';
import ErrorPage from './views/error-page/ErrorPage';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 60 * 1000,
      cacheTime: 60 * 60 * 1000,
    },
  },
});

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<ErrorPage />}>
      <Route
        index
        element={<ProductList />}
        loader={productListLoader(queryClient)}
      />
      <Route
        path="product"
        index
        element={<ProductList />}
        loader={productListLoader(queryClient)}
      />
      <Route
        path="product/:id"
        element={<ProductDetails />}
        loader={productDetailsLoader(queryClient)}
        errorElement={<ErrorPage />}
      />
    </Route>
  )
);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}

export default App;
