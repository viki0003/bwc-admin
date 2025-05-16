// import React from "react";
// import "./Appointments.css";

// const parents = Array(2).fill({
//   Date: "Apr 14, 5PM",
//   Player: "Ava S.",
//   Trainer: "Coach Mike",
//   Sports: "Basketball",
//   Location: "Holy Family",
//   Type: "1 on 1",
//   Status: "Confirmed ",
// });

// const Appointments = () => {
//   return (
//     <>
//          <div className="dashboard">
//         <h2>Dashboard</h2>
//         </div>

//       <div className="full-container">
//       <div className="key-stats-header">
//         <p>Key Stats</p>
//         </div>
//         <div className="filter-bars">

//           <div className="search-container">
//             <input className="search" type="text" />
//             <svg
//               className="search-icon"
//               viewBox="0 0 24 24"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
//                 stroke="#808080"
//                 stroke-width="2"
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//               />
//               <path
//                 d="M21 21L16.65 16.65"
//                 stroke="#808080"
//                 stroke-width="2"
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//               />
//             </svg>
//           </div>
//           <button>Date Range</button>
//           <button>Status</button>
//           <button>Trainer</button>
//           <button>Sports</button>
//           <button>Location</button>
//           <button>Session Type</button>
//         </div>

//         <div className="table-wrapper">
//           <div className="table-header">
//             <div>Date & Time</div>
//             <div>Player</div>
//             <div>Trainer</div>
//             <div>Sports</div>
//             <div>Location</div>
//             <div>Type</div>
//             <div>Status</div>
//           </div>
//           {parents.map((parent, index) => (
//             <div className="table-row" key={index}>
//               <div className="name">
//                 <b>{parent.name}</b>
//               </div>
//               <div className="Date">{parent.Date}</div>
//               <div className="Player">{parent.Player}</div>
//               <div className="Trainer">{parent.Trainer}</div>
//               <div className="Sprts">{parent.Sports}</div>
//               <div className="location">{parent.location}</div>
//               <div className="Type">{parent.Type}</div>
//               <div className="Status">{parent.Status}</div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Appointments;


import React from "react";
import "./Appointments.css";

const Appointments = () => {
  const appointments = [
    {
      date: "Apr 14, 5PM",
      player: "Ava S.",
      trainer: "Coach Mike",
      sports: "Basketball",
      location: "Holy Family",
      type: "1 on 1",
      status: "Confirmed"
    },
    {
      date: "Apr 14, 5PM",
      player: "Liam, Noah, Sofia...",
      trainer: "Coach Sarah",
      sports: "Soccer",
      location: "Holy Family",
      type: "Group",
      status: "Pending"
    }
  ];

  return (
    <>
    
      <div className="full-container">
        <div className="key-stats-header">
          <p>Appointments Table</p>
        </div>
        
        <div className="filter-bar">
          <div className="search-container">
            <input className="search" type="text"  />
            <svg
              className="search-icon"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
                stroke="#808080"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M21 21L16.65 16.65"
                stroke="#808080"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <button>Date Range</button>
          <button>Status</button>
          <button>Trainer</button>
          <button>Sports</button>
          <button>Location</button>
          <button>Session Type</button>
        </div>

        <div className="table-wrapper">
          <div className="table-header appointments-table-header">
            <div>Date & Time</div>
            <div>Player</div>
            <div>Trainer</div>
            <div>Sports</div>
            <div>Location</div>
            <div>Type</div>
            <div>Status</div>
          </div>
          
          {appointments.map((appointment, index) => (
            <div className="table-row appointments-table-row" key={index}>
              <div className="date">{appointment.date}</div>
              <div className="player">{appointment.player}</div>
              <div className="trainer">{appointment.trainer}</div>
              <div className="sports">{appointment.sports}</div>
              <div className="location">{appointment.location}</div>
              <div className="type">{appointment.type}</div>
              <div className="status">
                <span className={`status-badge ${appointment.status.toLowerCase().replace(" ", "-")}`}>
                  {appointment.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Appointments;