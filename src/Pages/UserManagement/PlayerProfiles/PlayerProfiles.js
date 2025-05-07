import React from "react";
import "./PlayerProfiles.css";

const parents = Array(7).fill({
  name: "John Smith",
  parent_name: "James Smith",
  package: "1-on-1",
  sessions_left: "2",
  sports: "Basketball",
});

const PlayerProfiles = () => {
  return (
    <>
    <div className="parent-container parent-player-header">
    <div className="parent-header">
          <span className="parent-breadcrumb">
            User Management  &gt;  <b>Player Profiles</b>
          </span>
          <button className="add-btn">Add New Player</button>
        </div>
    </div>
    
      <div className="parent-container">
      <div className="filter-bar">
      <div className="search-container">
            <input className="search" type="text" />
            <svg
              className="search-icon"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
                stroke="#808080"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M21 21L16.65 16.65"
                stroke="#808080"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        <button>Date Range</button>
        <button>Age</button>
        <button>Player Tags</button>
        <button>Subscription</button>
        <button>Sports</button>
      </div>

      <div className="table-wrapper">
        <div className="table-header player-header">
          <div>Name</div>
          <div>Parent Name</div>
          <div>Package</div>
          <div>Session Left</div>
          <div>Sport</div>
          <div></div>
        </div>
        {parents.map((parent, index) => (
          <div className="table-row player-profile-row" key={index}>
            <div className="name"><b>{parent.name}</b></div>
            <div className="email">{parent.parent_name}</div>
            <div className="phone">{parent.package}</div>
            <div className="type">{parent.sessions_left}</div>
            <div className="location">{parent.sports}</div>
            {/* <div><button className="view-btn">View</button></div> */}
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default PlayerProfiles;
