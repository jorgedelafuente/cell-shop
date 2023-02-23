import { Link, useLocation } from 'react-router-dom';

import BreadCrumbs from '../bread-crumbs/BreadCrumbs';

import './Header.scss';

const Header = ({ cart, productList }) => {
  const location = useLocation();

  return (
    <header>
      <div>
        <Link to="/">CELL SHOP</Link>
      </div>

      <BreadCrumbs productList={productList} location={location} />

      <div>Cart : {cart}</div>
    </header>
  );
};

export default Header;
