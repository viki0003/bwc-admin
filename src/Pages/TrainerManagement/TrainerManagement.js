import React, { useEffect } from "react";
import "./trainermanagement.css";
import { Link } from "react-router-dom";
import SearchIcon from "../../Assets/Icons/SearchIcon";
import { useTrainerAccounts } from "../../APIContext/TrainerAccountContext";

const TrainerManagement = () => {
  const { trainers, loading, fetchTrainers } = useTrainerAccounts();

  useEffect(() => {
    fetchTrainers();
  }, [fetchTrainers]);

  return (
    <div className="trainer-management">
      <div className="trainer-management-table">
        <h6>Trainer Profiles</h6>
        <div className="trainer-management-table-header">
          <div className="search-table">
            <div className="search-container">
              <input type="search" placeholder="Search by name..." />
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
              </select>
            </div>
            <div className="filterbtn">
              <select>
                <option value="All">Sports</option>
              </select>
            </div>
            <div className="filterbtn">
              <select>
                <option value="All">Status</option>
              </select>
            </div>
          </div>
        </div>

        <div className="trainer-management-table-body">
          {loading ? (
            <p>Loading trainers...</p>
          ) : trainers.length === 0 ? (
            <p>No Trainers Found</p>
          ) : (
            <table>
              <thead>
                <tr>
                 
                  <th>Name</th>
                  <th>Sports</th>
                  <th>Contact</th>
                  <th>Company</th>
                  <th>Address</th>
                  <th>Date of Birth</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {trainers.map((t) => (
                  <tr key={t.id}>
                   
                    <td>
                      {t.user?.first_name || "N/A"} {t.user?.last_name || ""}
                    </td>
                    <td>
                      {t.sports?.length > 0
                        ? t.sports.map((s) => s.name).join(", ")
                        : "N/A"}
                    </td>
                    <td>{t.phone || "N/A"}</td>
                    <td>{t.company?.name || "N/A"}</td>
                    <td>{t.address || "N/A"}</td>
                    <td>{t.date_of_birth || "N/A"}</td>
                    <td>
                      <span className="status-badge active">Active</span>
                    </td>
                    <td>
                      <Link
                        to={`/trainermanagement/edit/${t.id}`}
                        className="edit-btn"
                      >
                        Edit
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default TrainerManagement;
