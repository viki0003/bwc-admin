import React from "react";
import Header from "../../../Components/Header/Header";
import "./style.css";

export default function App() {
  return (
    <div className="dashboard-container">
      {/* Sidebar can be added here */}
      <div className="main-content">
        <Header />
        <div className="content-wrapper">
          <h2 className="welcome-heading">Welcome, Coach [Name]</h2>

          <div className="section">
            <h3>Today's Sessions</h3>
            <div>
              <div className="placeholder-box" />
              <div className="placeholder-box" />
              <div className="placeholder-box" />
            </div>
            <button className="full-width-button">View All Sessions</button>
          </div>

          <div className="grid-two-column">
            <div className="section">
              <h3>Your Availability</h3>
              {[1, 2, 3, 4].map((_, i) => (
                <div key={i} className="placeholder-box" />
              ))}
            </div>
            <div className="section">
              <h3>Notifications</h3>
              {[1, 2, 3].map((_, i) => (
                <div key={i} className="placeholder-box" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
