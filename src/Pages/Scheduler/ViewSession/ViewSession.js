import React from "react";
import "./viewsession.css";

const ViewSession = () => {
  return (
    <div className="view-session">
      <h2>Form Fields</h2>

      <div className="view-session-form">
        <form>
          <div className="form-item">
            <label>Event Name</label>
            <input type="text" />
          </div>
          <div className="form-item">
            <label>Select Date</label>
            <input type="date" />
          </div>
          <div className="form-item">
            <label>Time Slot</label>
            <input type="time" />
          </div>
          <div className="form-item">
            <label>Sport</label>
            <input type="text" />
          </div>
          <div className="form-item">
            <label>Trainer</label>
            <input type="text" />
          </div>
          <div className="form-item">
            <label>Location</label>
            <input type="text" />
          </div>
          <div className="form-item">
            <label>Session Type</label>
            <input type="text" />
          </div>
          <div className="form-item">
            <label>Max Capacity</label>
            <input type="text" />
          </div>
          <div className="form-item">
            <label>Client Type</label>
            <input type="text" />
          </div>
          <div className="submit-button">
            <button type="submit" className="btn gold">
              Save Session
            </button>
            <button type="button" className="btn black">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default ViewSession;
