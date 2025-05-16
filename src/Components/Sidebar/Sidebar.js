import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      {/* Dashboard */}
      <div className="sidebar-item">
        <Link to="/">Dashboard</Link>
      </div>
      <div className="sidebar-item">
        <Link to="#">User Management</Link>
      </div>
      <div className="sidebar-item">
        <Link to="/appointments">Appointments</Link>
      </div>
      <div className="sidebar-item">
        <Link to="/Scheduler">Scheduler</Link>
      </div>
      <div className="sidebar-item">
        <Link to="#">Billing & Payments</Link>
      </div>
      <div className="sidebar-item">
        <Link to="#">Trainers Section</Link>
      </div>
      <div className="sidebar-item">
        <Link to="#">Reports & Analytics</Link>
      </div>
      
    </div>
  );
};

export default Sidebar;
