import React, { useState } from "react";
import { Dialog } from "primereact/dialog";
import "./sessiondetails.css";
import AssignTrainer from "./AssignTrainer/AssignTrainer";
const SessionDetails = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="sessiondetails">
      <div className="sd-content">
        <h1>Session Details</h1>
        <div className="sd-cnt-list">
          <div className="sd-cnt-list-item">
            <strong>Session Type:</strong>
            <span>1-on-1</span>
          </div>
          <div className="sd-cnt-list-item">
            <strong>Date & Time:</strong>
            <span>Apr 14, 5:00 PM</span>
          </div>
          <div className="sd-cnt-list-item">
            <strong>Sport:</strong>
            <span>Soccer</span>
          </div>
          <div className="sd-cnt-list-item">
            <strong>Location:</strong>
            <span>Holy Family</span>
          </div>
          <div className="sd-cnt-list-item">
            <strong>Status:</strong>
            <span>Confirmed</span>
          </div>
          <div className="sd-cnt-list-item">
            <strong>Assigned Trainer:</strong>
            <span>Coach Mike</span>
          </div>
        </div>
        <hr />
        <div className="sd-cnt-ftr">
          <div className="sd-cnt-ftr-item">
            <strong>Player Details:</strong>
            <span>John Smith</span>
          </div>
          <div className="sd-cnt-ftr-item">
            <strong>Parent Details:</strong>
            <span>John Smith</span>
          </div>
        </div>
      </div>
      <div className="sessiondetails-btn">
        <button className="btn blue" onClick={() => setVisible(true)}>
          Assign Trainer
        </button>
        <button className="btn black">Modify Session</button>
        <button className="btn red">Cancel Session</button>
      </div>

      <Dialog
        header="Assign Trainer to Session"
        visible={visible}
        style={{ width: "70vw" }}
        onHide={() => {
          if (!visible) return;
          setVisible(false);
        }}
      >
        <AssignTrainer />
      </Dialog>
    </div>
  );
};
export default SessionDetails;
