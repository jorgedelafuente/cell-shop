import { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { Outlet } from 'react-router-dom';

import { addToCartLoader } from '../services/addToCartLoader';
import Header from '../components/header/Header';

import './Layout.scss';

const Layout = () => {
  const queryClient = useQueryClient();
  const [productModel, setProductModel] = useState('');
  const [cartCount, setCartCount] = useState(0);
  const addToCartMutation = useMutation(addToCartLoader(queryClient), {
    onSuccess: (data) => {
      setCartCount((prevCartCount) => (prevCartCount += data.count));
    },
  });

  return (
    <>
      <Header
        cartCount={cartCount}
        productModel={productModel}
        cartIsLoading={addToCartMutation.isLoading}
      />
      <main className="container">
        <Outlet context={{ setProductModel, addToCartMutation }} />
      </main>
    </>
  );
};

export default Layout;
