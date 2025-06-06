import React from "react";
import { TabView, TabPanel } from "primereact/tabview";
import "./scheduler.css";
import { Link } from "react-router-dom";

const Scheduler = () => {
  return (
    <div className="scheduler">
      <div className="scheduler-header">
        <h2>Weekly Schedule - 21 Apr 2025 to 27 Apr 2025 </h2>
        <div className="scheduler-header-buttons">
          <Link to="/scheduler/view-session" className="btn">
            Edit Schedule
          </Link>
          <Link to="/scheduler/add-session" className="btn">
            Add a New Session{" "}
          </Link>
        </div>
      </div>
      <div className="scheduler-tab">
        <TabView>
          <TabPanel header="BWC Sports Schedule">
          <div className="block-cstm">
          <div className="bloc-item"></div>
          <div className="bloc-item"></div>
          <div className="bloc-item"></div>
          <div className="bloc-item"></div>
          <div className="bloc-item"></div>
        </div>
          </TabPanel>
          <TabPanel header="Shooting School Session">
          <div className="block-cstm">
          <div className="bloc-item"></div>
          <div className="bloc-item"></div>
          <div className="bloc-item"></div>
          <div className="bloc-item"></div>
          <div className="bloc-item"></div>
        </div>
          </TabPanel>
          <TabPanel header="All">
          <div className="block-cstm">
          <div className="bloc-item"></div>
          <div className="bloc-item"></div>
          <div className="bloc-item"></div>
          <div className="bloc-item"></div>
          <div className="bloc-item"></div>
        </div>
          </TabPanel>
        </TabView>
      </div>
    </div>
  );
};

export default Scheduler;
