import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
// import Footer from "../Footer/Footer";
import Sidebar from "../Sidebar/Sidebar";

const Layout = () => {
  return (
    <div className="ui-layout">
      <Header />
      <div className="render-output">
        <div className="app-container">
          <div className="app-sidebar">
            <Sidebar />
          </div>
          <div className="app-content">
            <Outlet />
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
