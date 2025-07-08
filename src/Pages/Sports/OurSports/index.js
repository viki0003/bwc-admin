import React from "react";
import "./oursports.css";
import TrashIcon from "../../../Assets/Icons/TrashIcon";

const OurSports = () => {
  return (
    <div className="our-sports-container">
      <h2>Sports Table View</h2>
      <table className="our-sports-table">
        <thead>
          <tr>
            <th>Sport Name</th>
            <th>Active?</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Basketball</td>
            <td>
              <div className="toggle-container">
                <label className="switch toggle-switch">
                  <input type="checkbox" />
                  <span className="slider"></span>
                </label>
                Active
              </div>
            </td>
            <td>
              <button className="mt-event">
                <TrashIcon />
              </button>
            </td>
          </tr>

          <tr>
            <td>Soccer</td>
            <td>
              <div className="toggle-container">
                <label className="switch toggle-switch">
                  <input type="checkbox" />
                  <span className="slider"></span>
                </label>
                Active
              </div>
            </td>
            <td>
              <button className="mt-event">
                <TrashIcon />
              </button>
            </td>
          </tr>

          <tr>
            <td>Track & Field</td>
            <td>
              <div className="toggle-container">
                <label className="switch toggle-switch">
                  <input type="checkbox" />
                  <span className="slider"></span>
                </label>
                Active
              </div>
            </td>
            <td>
              <button className="mt-event">
                <TrashIcon />
              </button>
            </td>
          </tr>

          <tr>
            <td>Baseball</td>
            <td>
              <div className="toggle-container">
                <label className="switch toggle-switch">
                  <input type="checkbox" />
                  <span className="slider"></span>
                </label>
                Active
              </div>
            </td>
            <td>
              <button className="mt-event">
                <TrashIcon />
              </button>
            </td>
          </tr>

          <tr>
            <td>Bowling</td>
            <td>
              <div className="toggle-container">
                <label className="switch toggle-switch">
                  <input type="checkbox" />
                  <span className="slider"></span>
                </label>
                Active
              </div>
            </td>
            <td>
              <button className="mt-event">
                <TrashIcon />
              </button>
            </td>
          </tr>

          <tr>
            <td>Golf</td>
            <td>
              <div className="toggle-container">
                <label className="switch toggle-switch">
                  <input type="checkbox" />
                  <span className="slider"></span>
                </label>
                Active
              </div>
            </td>
            <td>
              <button className="mt-event">
                <TrashIcon />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default OurSports;
