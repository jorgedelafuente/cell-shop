import { NavLink } from 'react-router-dom';
import './BreadCrumbs.scss';

const BreadCrumbs = ({ location, productModel }) => {
  const crumbs = location.pathname.split('/').filter((crumb) => crumb !== '');
  return (
    <nav className="breadcrumbs">
      <div className="crumb">
        <BreadCrumbLink crumbs={crumbs} productModel={productModel} />
      </div>
    </nav>
  );
};

export default BreadCrumbs;

const BreadCrumbLink = ({ crumbs, productModel }) => {
  // Home Page
  if (!crumbs.length) {
    return <NavLink to="/">Home</NavLink>;
  }

  // Product Page
  if (crumbs.length === 1 && crumbs[0] === 'product') {
    return <NavLink to="product">Devices</NavLink>;
  }

  // Product Details Page
  if (crumbs[0] === 'product') {
    const productId = crumbs[1];
    return (
      <>
        <NavLink to="product">Devices</NavLink>
        <NavLink to={`product/${productId}`}>{productModel}</NavLink>
      </>
    );
  }
};
