import { Link, useLocation } from 'react-router-dom';

import BreadCrumbs from '../bread-crumbs/BreadCrumbs';

import './Header.scss';

const Header = ({ cartCount, productModel }) => {
  const location = useLocation();

  return (
    <header>
      <div>
        <Link to="/">CELL SHOP</Link>
      </div>

      <BreadCrumbs productModel={productModel} location={location} />

      <div>Cart : {cartCount}</div>
    </header>
  );
};

export default Header;
