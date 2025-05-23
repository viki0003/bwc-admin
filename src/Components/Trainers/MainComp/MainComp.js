import React, { useState } from "react";
import "./MainComp.css";

const AvailabilityComponent = () => {
  const [availabilityType, setAvailabilityType] = useState("locked-in");


  const [availability, setAvailability] = useState({
    Monday: {
      available: true,
      timeSlots: [
        { time: "10:00 AM – 12:00 PM", selected: true },
        { time: "12:00 PM – 02:00 PM", selected: false },
        { time: "02:00 PM – 04:00 PM", selected: false },
      ],
    },
    Tuesday: {
      available: false,
      timeSlots: [
        { time: "12:00 PM – 02:00 PM", selected: false },
        { time: "02:00 PM – 04:00 PM", selected: false },
      ],
    },
    Wednesday: {
      available: true,
      timeSlots: [
        { time: "10:00 AM – 12:00 PM", selected: true },
        { time: "12:00 PM – 02:00 PM", selected: false },
        { time: "02:00 PM – 04:00 PM", selected: false },
      ],
    },
    Thursday: {
      available: false,
      timeSlots: [
        { time: "12:00 PM – 02:00 PM", selected: false },
        { time: "02:00 PM – 04:00 PM", selected: false },
      ],
    },
    Friday: {
      available: false,
      timeSlots: [
        { time: "12:00 PM – 02:00 PM", selected: false },
        { time: "02:00 PM – 04:00 PM", selected: false },
      ],
    },
    Saturday: {
      available: false,
      timeSlots: [
        { time: "12:00 PM – 02:00 PM", selected: false },
        { time: "02:00 PM – 04:00 PM", selected: false },
      ],
    },
  });

  const handleAvailabilityTypeChange = (type) => {
    setAvailabilityType(type);
  };

  const handleTimeSlotChange = (day, timeIndex) => {
    if (availabilityType === "locked-in") {
      setAvailability((prev) => ({
        ...prev,
        [day]: {
          ...prev[day],
          timeSlots: prev[day].timeSlots.map((slot, index) =>
            index === timeIndex ? { ...slot, selected: !slot.selected } : slot
          ),
        },
      }));
    }
  };

  const handleAvailabilityToggle = (day) => {
    if (availabilityType === "weekly") {
      setAvailability((prev) => ({
        ...prev,
        [day]: {
          ...prev[day],
          available: !prev[day].available,
        },
      }));
    }
  };

  const renderAvailabilityContent = () => {
    if (availabilityType === "locked-in") {
      return (
        <div className="availability-section">
          <h3 className="section-title">Weekly Availability Selector</h3>
          <div className="date-range">4 May 2024 - 10 May 2024</div>

          <div className="availability-grid">
            <div className="grid-header">
              <div className="day-column">Day</div>
              <div className="time-column">Time Slot</div>
            </div>

            {Object.entries(availability).map(([day, data]) => (
              <div key={day} className="day-row">
                <div className="day-name">{day}</div>
                <div className="time-slots">
                  {data.timeSlots.map((slot, index) => (
                    <label key={index} className="time-slot">
                      <input
                        type="checkbox"
                        checked={slot.selected}
                        onChange={() => handleTimeSlotChange(day, index)}
                        className="time-checkbox"
                      />
                      <span className="time-text">{slot.time}</span>
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    } else {
      return (
        <div className="availability-section">
          <h3 className="section-title">
            Weekly Selector (Refreshes Every Week)
          </h3>
          <div className="date-range">4 May 2024 - 10 May 2024</div>

          <div className="weekly-grid">
            <div className="weekly-header">
              <div className="day-column">Day</div>
              <div className="availability-column">Availability</div>
              <div className="time-column">Time Slot</div>
            </div>

            {Object.entries(availability).map(([day, data]) => (
              <div key={day} className="weekly-row">
                <div className="day-name">{day}</div>
                <div className="availability-toggle">
                  <select
                    value={data.available ? "Yes" : "No"}
                    onChange={() => handleAvailabilityToggle(day)}
                    className={`availability-select ${
                      day === "Thursday" ? "highlighted" : ""
                    }`}
                  >
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>
                <div className="time-slots">
                  {data.available &&
                    data.timeSlots.map((slot, index) => (
                      <label key={index} className="time-slot">
                        <input
                          type="checkbox"
                          checked={slot.selected}
                          onChange={() => handleTimeSlotChange(day, index)}
                          className="time-checkbox"
                        />
                        <span className="time-text">{slot.time}</span>
                      </label>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }
  };

  return (
    <div className="content-wrapper">
      <h1 className="page-title">Availability & Time Off</h1>
      <div className="content-wrapper2">
        <div className="availability-type-selector">
          <h3 className="selector-title">Select Availability Type</h3>
          <div className="type-buttons">
            <button
              className={`type-button ${
                availabilityType === "locked-in" ? "active" : ""
              }`}
              onClick={() => handleAvailabilityTypeChange("locked-in")}
            >
              Locked-In ⓘ
            </button>
            <button
              className={`type-button ${
                availabilityType === "weekly" ? "active" : ""
              }`}
              onClick={() => handleAvailabilityTypeChange("weekly")}
            >
              Weekly ⓘ
            </button>
          </div>
        </div>

        {renderAvailabilityContent()}
      </div>
    </div>
  );
};

export default AvailabilityComponent;
