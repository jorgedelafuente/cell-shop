import { useState } from 'react';
import { useMutation } from 'react-query';
import { Outlet } from 'react-router-dom';
import Header from '../components/header/Header';
import './Layout.scss';
import { addToCartService } from '../services/';

const Layout = () => {
  const [productModel, setProductModel] = useState('');
  const [cartCount, setCartCount] = useState(0);

  const addToCartMutation = useMutation({
    mutationFn: addToCartService,
    onSuccess: (data) => {
      setCartCount((prevCartCount) => (prevCartCount += data.count));
    },
  });

  return (
    <>
      <Header cartCount={cartCount} productModel={productModel} />
      <main className="container">
        <Outlet context={{ setProductModel, addToCartMutation }} />
      </main>
    </>
  );
};

export default Layout;
