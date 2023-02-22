import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    <header>
      <div>
        <Link to="/">CELL SHOP</Link>
      </div>
      <nav>
        <Link to="/product/">bread crumbs</Link>
      </nav>
      <div>Cart</div>
    </header>
  );
};

export default Header;
