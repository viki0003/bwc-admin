import React from "react";
import "./manageevent.css";
import TrashIcon from "../../../Assets/Icons/TrashIcon";
const ManageEvent = () => {
  return (
    <div className="manage-event-container">
      <table className="manage-event-table">
        <thead>
          <tr>
            <th>Template Name</th>
            <th>Trainers</th>
            <th>Supervisors</th>
            <th>Activities</th>
            <th>Equipment</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Field Day</td>
            <td>6</td>
            <td>6</td>
            <td>6</td>
            <td>6</td>
            <td>
              <button className="mt-event">
                <TrashIcon />
              </button>
            </td>
          </tr>
          <tr>
            <td>Field Day</td>
            <td>6</td>
            <td>6</td>
            <td>6</td>
            <td>6</td>
            <td>
              <button className="mt-event">
                <TrashIcon />
              </button>
            </td>
          </tr>
          <tr>
            <td>Field Day</td>
            <td>6</td>
            <td>6</td>
            <td>6</td>
            <td>6</td>
            <td>
              <button className="mt-event">
                <TrashIcon />
              </button>
            </td>
          </tr>
          <tr>
            <td>Field Day</td>
            <td>6</td>
            <td>6</td>
            <td>6</td>
            <td>6</td>
            <td>
              <button className="mt-event">
                <TrashIcon />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="manage-event-footer">
        <button className="btn gold">Create New Event Template</button>
        <button className="btn black">Cancel</button>
      </div>
    </div>
  );
};
export default ManageEvent;
