import { useState } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Header from '../components/header/Header';
import './Layout.scss';

const Layout = () => {
  const productList = useLoaderData();
  const [cart, setCart] = useState(0);
  return (
    <>
      <Header cart={cart} productList={productList} />
      <main className="container">
        <Outlet context={{ cart, setCart, productList }} />
      </main>
    </>
  );
};

export default Layout;
