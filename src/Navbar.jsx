import React, { useState } from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

function Navbar({cart}) {
  const [menu , setMenu] = useState(false);

  return (
    
    <nav className="navbar">

      <div className="menu" onClick={() => setMenu(!menu)}>
        ☰
      </div>
      <div className="logo"><h2>PRODUCT🛒</h2></div>

      <ul className={menu ? "nav-links active" : "nav-links"}>
        <li><Link to="/">Home</Link></li>

        <li className="dropdown">
          <Link to="/men">Men</Link>

          <div className="dropdown-menu">
            <Link to="/shirts">Shirts</Link>
            <Link to="/tshirts">T-Shirts</Link>
            <Link to="/jeans">Jeans</Link>
          </div>
        </li>

        <li className="dropdown">
            <Link to="/girl">Girl</Link>

             <div className="dropdown-menu">
                <Link to="/shirts">Shirts</Link>
            <Link to="/tshirts">T-Shirts</Link>
            <Link to="/jeans">Jeans</Link>
             </div>

            </li>
            <li>
  <Link to="/login">Login</Link>
</li>
      </ul>

      <input
        type="text"
        placeholder="Search..."
        className="search"
      />

     <Link to="/cart" className="cart">
  🛒 Cart ({cart.length})
</Link>

<div className="language">
  <select>
    <option value="en">English</option>
    <option value="hi">हिंदी</option>
  </select>
</div>

    </nav>
  );
}

export default Navbar;