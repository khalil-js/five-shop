import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="nav-bar">
      <div className="nav-mini">
        <Link to="/">
          <img src="/img/Adobe Express - file.png" className="logo" alt="Five.Shop Logo" />
        </Link>
        <ul className="nav-links">
          <li><Link to="/men">Men</Link></li>
          <li><Link to="/women">Women</Link></li>
        </ul>
      </div>
      <input type="search" placeholder="Search..." id="search" />
      <div className="nav-mini">
        <div className="nav-actions">
          <button className="btn"><img src="/icons/favourite.png" alt="Favorites" /></button>
          <button className="btn"><img src="/icons/shopping-bag.png" alt="Cart" /></button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
