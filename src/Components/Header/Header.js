import React from "react";
import "./header.css";
import logo from "../../Assets/Images/logo.png";

const Header = () => {
  return (
    <header className="header">
    <img src={logo} alt="Logo" className="logo" />
  </header>
  );
};
export default Header;