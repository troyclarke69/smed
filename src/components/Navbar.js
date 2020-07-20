import React, { useState } from "react";
import { FaAlignRight } from "react-icons/fa";
import { Link } from "react-router-dom";
// import Logo from "../../images/logo.svg";
// import "./Navbar.styles.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">

          {/* <Link to="/"> */}
            {/* <img className="image" src={Logo} alt="Beach Resort" /> */}
            <span className="logo logo-left link-text">wiki</span>
            <span className="logo logo-right link-text">Repo</span>
            {/* <span className="logo-text"><em>--</em></span> */}
          {/* </Link> */}

          <button type="button" className="nav-btn" onClick={handleToggle}>
            <FaAlignRight className="nav-icon" />
          </button>
        </div>
        <ul
          className={
            isOpen ? "nav-links show-nav link-text" : "nav-links link-text"
          }
        >
          <li onClick={handleToggle}>
            <Link to="/">Home</Link>
          </li>
          <li onClick={handleToggle}>
            <Link to="/">Artists</Link>
          </li>
          <li onClick={handleToggle}>
            <Link to="/">Albums</Link>
          </li>
          <li onClick={handleToggle}>
            <Link to="/">Songs</Link>
          </li>
        </ul>
      </div>
      <div className="curved-shape"></div>
    </nav>
  );
};

export default Navbar;
