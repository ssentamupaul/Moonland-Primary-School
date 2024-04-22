import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { RiMenuFoldFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import Logo from "./img/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar px-5">
      <div className="d-flex justify-content-between align-items-center">
        <div className="logo-container">
          <Link to="/">
            <img src={Logo} alt="" className="w-25" />
          </Link>
        </div>

        <div>
          <button className="navbar-toggle" onClick={toggleMenu}>
            {isMenuOpen ? <IoClose /> : <RiMenuFoldFill />}
          </button>
        </div>
      </div>
      <div>
        <ul className={`navbar-menu ${isMenuOpen ? "open" : ""}`}>
          <li className="navbar-item">
            <Link className="nav-link" to="/about">
              About Us
            </Link>
          </li>
          <li className="navbar-item">
            <Link className="nav-link" to="/contact">
              Contact Us
            </Link>
          </li>
          <li className="navbar-item">
            <Link className="nav-link" to="/portifolio">
              Portfolio
            </Link>
          </li>

          <button className="navbar-item donateBtn rounded">
            <Link className="nav-link" to="/donate">
              Donate
            </Link>
          </button>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
