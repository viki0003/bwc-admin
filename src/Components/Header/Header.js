import React, { useState } from "react";
import { Sidebar } from "primereact/sidebar";
import "./header.css";
import logo from "../../Assets/Images/BWC-Logo.png";
import SidebarUI from "../Sidebar/Sidebar";

const Header = () => {
  const [visibleLeft, setVisibleLeft] = useState(false);
  return (
    <>
      <header className="header">
        <div className="header__logo">
          <img src={logo} alt="Logo" className="logo" />
          <span>Admin</span>
        </div>
        <div className="hamburger-btn">
          <label class="switch" onClick={() => setVisibleLeft(true)}>
            <input type="checkbox" />
            <span class="wrapper">
              <span class="row">
                <span class="dot"></span>
                <span class="dot"></span>
              </span>
              <span class="row row-bottom">
                <span class="dot"></span>
                <span class="dot"></span>
              </span>
              <span class="row-vertical">
                <span class="dot"></span>
                <span class="dot middle-dot"></span>
                <span class="dot"></span>
              </span>
              <span class="row-horizontal">
                <span class="dot"></span>
                <span class="dot middle-dot-horizontal"></span>
                <span class="dot"></span>
              </span>
            </span>
          </label>
        </div>
      </header>
      <Sidebar
        header="BWC Admin"
        visible={visibleLeft}
        position="left"
        onHide={() => setVisibleLeft(false)}
      >
        <SidebarUI />
      </Sidebar>
    </>
  );
};
export default Header;
