import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/header/Header';
import './Layout.scss';

const Layout = () => {
  const [productModel, setProductModel] = useState('model');
  const [cart, setCart] = useState(0);
  return (
    <>
      <Header cart={cart} productModel={productModel} />
      <main className="container">
        <Outlet context={{ cart, setCart, setProductModel }} />
      </main>
    </>
  );
};

export default Layout;
