import React from "react";
import { FaSearch } from "react-icons/fa";
import { MdDarkMode } from "react-icons/md";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <img src="/images/Logo/Logo.png" alt="Logo" height="62px" />
        <div className="text">
          F<span>oo</span>dy M<span>oo</span>dy
        </div>
      </div>
      <div className="search">
        <div className="searchbar">
          <input type="text" placeholder="Search Food..." />
          <FaSearch className="search-icon" />
        </div>
      </div>
      <ul>
        <li>Contact</li>
        <li>
          <MdDarkMode className="dark-mode" />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
