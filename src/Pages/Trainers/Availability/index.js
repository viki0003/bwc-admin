import React, { useState } from "react";
import "./style.css";

const AvailabilityTag = ({ status }) => {
  return (
    <p
      className={`availability-tag ${
        status === "available" ? "is-available" : "is-unavailable"
      }`}
    >
      {status === "available" ? "Available" : "Unavailable"}
    </p>
  );
};

const CoachCard = ({ coach, handleToggleStatus }) => {
  return (
    <div className="coach-card">
      <h3>{coach.name}</h3>
      <AvailabilityTag status={coach.status} />
      <button
        className="switch-button"
        onClick={() => handleToggleStatus(coach.id)}
      >
        Toggle Availability
      </button>
    </div>
  );
};

const CoachGrid = ({ coaches, handleToggleStatus }) => {
  return (
    <div className="coach-grid">
      {coaches.map((coach) => (
        <CoachCard
          key={coach.id}
          coach={coach}
          handleToggleStatus={handleToggleStatus}
        />
      ))}
    </div>
  );
};

const App = () => {
  const initialCoaches = [
    { id: 1, name: "John Doe", status: "available" },
    { id: 2, name: "Jane Smith", status: "unavailable" },
    { id: 3, name: "Mike Johnson", status: "available" },
    { id: 4, name: "Emily Brown", status: "unavailable" },
  ];

  const [coaches, setCoaches] = useState(initialCoaches);

  const handleToggleStatus = (id) => {
    setCoaches((prev) =>
      prev.map((c) =>
        c.id === id
          ? {
              ...c,
              status: c.status === "available" ? "unavailable" : "available",
            }
          : c
      )
    );
  };

  return (
    <div className="container">
      <h2>Coach Availability</h2>
      <CoachGrid coaches={coaches} handleToggleStatus={handleToggleStatus} />
    </div>
  );
};

export default App;
