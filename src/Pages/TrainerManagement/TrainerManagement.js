import React from "react";
import "./trainermanagement.css";
import { Link } from "react-router-dom";
import SearchIcon from "../../Assets/Icons/SearchIcon";
const TrainerManagement = () => {
  return (
    <div className="trainer-management">
      <Link to="/trainermanagement/add-trainer" className="btn">
        Add a New Trainer
      </Link>
      <div className="trainer-management-table">
        <h6>Trainer Profiles</h6>
        <div className="trainer-management-table-header">
          <div className="search-table">
            <div className="search-container">
              <input type="search" />
              <span>
                <SearchIcon />
              </span>
            </div>
            <div className="filterbtn">
              <input type="date" />
            </div>
            <div className="filterbtn">
              <select>
                <option value="All">Location</option>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>
            <div className="filterbtn">
              <select>
                <option value="All">Sports</option>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>
            <div className="filterbtn">
              <select>
                <option value="All">Status</option>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>
          </div>
        </div>
        <div className="trainer-management-table-body">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Sports</th>
                <th>Contact</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="trainer-management-table">
        <h6>Trainer Availability</h6>

        <div className="block-cstm">
          <div className="bloc-item"></div>
          <div className="bloc-item"></div>
          <div className="bloc-item"></div>
          <div className="bloc-item"></div>
          <div className="bloc-item"></div>
        </div>
      </div>
    </div>
  );
};
export default TrainerManagement;
