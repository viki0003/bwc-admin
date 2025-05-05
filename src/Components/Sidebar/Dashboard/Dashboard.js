import React from "react";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <>
      <div className="dashboard">
        <h2>Dashboard</h2>
        {/* <p>Key Stats</p> */}
      </div>

      <div className="parent-container">
        <div className="key-stats-header">
        <p>Key Stats</p>
        </div>
        <div className="key-stats">
          <div className="stat">
            <p>Total Sessions Booked</p>
            
            <b>230</b>
            <div></div>
          </div>
          <div className="stat">
            <p>Revenue</p>
            
            <b>$15000</b>
            <div className="price-breakdown-section">
            <div className="price-section"></div>
            <div className="price-section-border">|</div>
            <div className="price-section"></div>
            </div>
          </div>
          <div className="stat">
            <p>Subscriptions</p>
            
            <b>120</b>
            <div></div>
          </div>
          <div className="stat">
            <p>Upcoming Sessions</p>
            
            <b>15</b>
            <div></div>
          </div>
          <div className="stat">Other</div>
        </div>
      </div>

      <div className="actions-notifications">
        <div className="actions">
          <h4 className="section-title">Quick Actions</h4>
          <button className="action-btn">
            <span> Add a New Location</span>
            <svg
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.2617 15.2175L14.6967 1.78249M14.6967 1.78249L14.9619 12.1239M14.6967 1.78249L4.3553 1.51732"
                stroke="#424242"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <button className="action-btn">
            <span> Add New Parent (Manual Cash Payments)</span>
            <svg
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.2617 15.2175L14.6967 1.78249M14.6967 1.78249L14.9619 12.1239M14.6967 1.78249L4.3553 1.51732"
                stroke="#424242"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <button className="action-btn">
            <span>Manage New Appointments</span>
            <svg
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.2617 15.2175L14.6967 1.78249M14.6967 1.78249L14.9619 12.1239M14.6967 1.78249L4.3553 1.51732"
                stroke="#424242"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* <div className="notifications">
    <h4 className="section-title">Notifications</h4>
    <div className="notification-item">Soccer session canceled on March 12, 4 PM</div>
    <div className="notification-item">Basketball session rescheduled for March 15, 2 PM</div>
    <div className="notification-item">Reminder: Tennis session on March 14, 3 PM</div>
  </div> */}

        <div className="notifications">
          <h4 className="section-title">Notifications</h4>
          <button className="action-btn">
            <span>Soccer session canceled on March 12, 4 PM</span>
            <span className="arrow"></span>
          </button>
          <button className="action-btn">
            <span>Basketball session rescheduled for March 15, 2 PM</span>
            <span className="arrow"></span>
          </button>
          <button className="action-btn">
            <span>Reminder: Tennis session on March 14, 3 PM</span>
            <span className="arrow"></span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
