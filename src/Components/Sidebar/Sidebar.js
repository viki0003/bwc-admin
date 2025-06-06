import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  const location = useLocation();
  const [userMgmtOpen, setUserMgmtOpen] = useState(false);

  // Matches active routes including nested ones
  const isActive = (path) => location.pathname.startsWith(path);
  const isSubActive = (path) => location.pathname === path;

  // Toggle dropdown for User Management
  const toggleUserMgmt = () => {
    setUserMgmtOpen(!userMgmtOpen);
  };

  return (
    <div className="sidebar">
      {/* Dashboard */}
      <div className={`sidebar-item ${isActive("/dashboard") ? "active" : ""}`}>
        <Link to="/dashboard/add-a-location">Dashboard</Link>
      </div>

     {/* User Management */}
     <div
        className={`sidebar-item ${userMgmtOpen ? "has-active" : ""}`}
        onClick={toggleUserMgmt}
      >
        <span>User Management</span>
      </div>
      {userMgmtOpen && (
        <div className="dropdown">
          <div
            className={`sidebar-subitem ${
              isSubActive("/user-management/parent-profile") ? "active" : ""
            }`}
          >
            <Link to="/user-management/parent-profile">Parent Profiles</Link>
          </div>
          <div
            className={`sidebar-subitem ${
              isSubActive("/user-management/player-profile") ? "active" : ""
            }`}
          >
            <Link to="/user-management/player-profile">Player Profiles</Link>
          </div>
        </div>
      )}

      {/* Appointments */}
      <div className={`sidebar-item ${isActive("/appointments") ? "active" : ""}`}>
        <Link to="/appointments">Appointments</Link>
      </div>

      {/* Scheduler */}
      <div className={`sidebar-item ${isActive("/scheduler") ? "active" : ""}`}>
        <Link to="/scheduler">Scheduler</Link>
      </div>

      {/* Billing (no route yet) */}
      <div className="sidebar-item">
        <Link to="#">Billing & Payments</Link>
      </div>

      {/* Trainers Section */}
      <div className={`sidebar-item ${isActive("/trainer-management") ? "active" : ""}`}>
        <Link to="/trainer-management">Trainers Section</Link>
      </div>

      {/* Reports & Analytics */}
      <div className={`sidebar-item ${isActive("/reports-analytics") ? "active" : ""}`}>
        <Link to="/reports-analytics">Reports & Analytics</Link>
      </div>
    </div>
  );
};

export default Sidebar;
