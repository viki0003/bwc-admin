import React from "react";
import { useSports } from "../../../APIContext/SportsContext";
import TrashIcon from "../../../Assets/Icons/TrashIcon";
import "./oursports.css";

const OurSports = () => {
  const { sports, deleteSport, toggleSportActive } = useSports();

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
          {sports.map((sport) => (
            <tr key={sport.id}>
              <td>{sport.name}</td>
              <td>
                <div className="toggle-container">
                  <label className="switch toggle-switch">
                    <input
                      type="checkbox"
                      checked={sport.is_active}
                      onChange={() => toggleSportActive(sport.id, !sport.is_active)}
                    />
                    <span className="slider"></span>
                  </label>
                  {sport.is_active ? "Active" : "Inactive"}
                </div>
              </td>
              <td>
                <button className="mt-event" onClick={() => deleteSport(sport.id)}>
                  <TrashIcon />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OurSports;
