import React, { useState } from "react";
import { useSports } from "../../../APIContext/SportsContext";
import TrashIcon from "../../../Assets/Icons/TrashIcon";
import EditSportModal from "./EditSportModal";
import { Dialog } from "primereact/dialog";
import "./oursports.css";
import { FaPen } from "react-icons/fa";

const OurSports = () => {
  const { sports, deleteSport, toggleSportActive } = useSports();
  const [selectedSport, setSelectedSport] = useState(null);
  const [visible, setVisible] = useState(false);

  const handleEditClick = (sport) => {
    setSelectedSport(sport);
    setVisible(true);
  };

  const handleCloseModal = () => {
    setVisible(false);
    setSelectedSport(null);
  };

  return (
    <div className="our-sports-container">
      <h2>Sports Table View</h2>
      <table className="our-sports-table">
        <thead>
          <tr>
            <th>Sport Name</th>
            <th>Active?</th>
            <th>Sports Type</th>
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
                      onChange={() =>
                        toggleSportActive(sport.id, !sport.is_active)
                      }
                    />
                    <span className="slider"></span>
                  </label>
                  {sport.is_active ? "Active" : "Inactive"}
                </div>
              </td>
              <td>{sport.sport_type}</td>
              <td>
                <div className="sports-action-btns">
                  <button
                    className="mt-event"
                    onClick={() => handleEditClick(sport)}
                  >
                    <FaPen />
                  </button>
                  <button
                    className="mt-event"
                    onClick={() => deleteSport(sport.id)}
                  >
                    <TrashIcon />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Dialog
        header="Edit Sport"
        visible={visible}
        style={{ width: "50vw" }}
        onHide={handleCloseModal}
      >
        {selectedSport && (
          <EditSportModal sport={selectedSport} onClose={handleCloseModal} />
        )}
      </Dialog>
    </div>
  );
};

export default OurSports;
