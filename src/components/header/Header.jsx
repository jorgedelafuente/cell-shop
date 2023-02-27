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

      <div>
        <img
          src={process.env.PUBLIC_URL + '/images/shopping-cart.svg'}
          alt="shopping cart"
        />
        <span>{cartCount}</span>
      </div>
    </header>
  );
};

export default Header;
