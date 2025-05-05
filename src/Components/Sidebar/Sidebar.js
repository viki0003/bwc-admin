// import React, { useState } from "react";
// import "./Sidebar.css";

// const Sidebar = ({ setSelectedSection }) => {
//   const [showUserManagement, setShowUserManagement] = useState(false);

//   const handleItemClick = (item) => {
//     if (item === "User Management") {
//       setShowUserManagement(!showUserManagement);
//     } else {
//       setSelectedSection(item);
//       setShowUserManagement(false); // Collapse submenu when another section is clicked
//     }
//   };

//   return (
//     <div className="sidebar">
//       {/* Dashboard */}
//       <div
//         className="sidebar-item"
//         onClick={() => handleItemClick("Dashboard")}
//       >
//         Dashboard
//       </div>

//       {/* User Management with submenu */}
//       <div
//         className="sidebar-item"
//         onClick={() => handleItemClick("User Management")}
//       >
//         User Management
//       </div>
//       {showUserManagement && (
//         <div className="sidebar-submenu">
//           <div
//             className="sidebar-item"
//             onClick={() => setSelectedSection("Parent Profiles")}
//           >
//             Parent Profiles
//           </div>
//           <div
//             className="sidebar-item"
//             onClick={() => setSelectedSection("Player Profiles")}
//           >
//             Player Profiles
//           </div>
//         </div>
//       )}

//       {/* Other Menu Items */}
//       <div
//         className="sidebar-item"
//         onClick={() => handleItemClick("Appointments")}
//       >
//         Appointments
//       </div>
//       <div
//         className="sidebar-item"
//         onClick={() => handleItemClick("Scheduler")}
//       >
//         Scheduler
//       </div>
//       <div
//         className="sidebar-item"
//         onClick={() => handleItemClick("Billing & Payments")}
//       >
//         Billing & Payments
//       </div>
//       <div
//         className="sidebar-item"
//         onClick={() => handleItemClick("Trainers Section")}
//       >
//         Trainers Section
//       </div>
//       <div
//         className="sidebar-item"
//         onClick={() => handleItemClick("Reports & Analytics")}
//       >
//         Reports & Analytics
//       </div>
//     </div>
//   );
// };

// export default Sidebar;

import React, { useState } from "react";
import "./Sidebar.css";

const Sidebar = ({ setSelectedSection }) => {
  const [showUserManagement, setShowUserManagement] = useState(false);
  const [activeSection, setActiveSection] = useState("Dashboard");

  const handleItemClick = (item) => {
    if (item === "User Management") {
      setShowUserManagement(!showUserManagement);
    } else {
      setSelectedSection(item);
      setActiveSection(item);
      setShowUserManagement(false); // Collapse submenu when another section is clicked
    }
  };

  const handleSubmenuClick = (item) => {
    setSelectedSection(item);
    setActiveSection(item);
  };

  return (
    <div className="sidebar">
      {/* Dashboard */}
      <div
        className={`sidebar-item ${activeSection === "Dashboard" ? "active" : ""}`}
        onClick={() => handleItemClick("Dashboard")}
      >
        Dashboard
      </div>

      {/* User Management with submenu */}
      <div
        className={`sidebar-item ${activeSection === "User Management" ? "active" : ""}`}
        onClick={() => handleItemClick("User Management")}
      >
        User Management
      </div>
      {showUserManagement && (
        <div className="sidebar-submenu">
          <div
            className={`sidebar-item ${
              activeSection === "Parent Profiles" ? "active-profile" : "inactive-profile"
            }`}
            onClick={() => handleSubmenuClick("Parent Profiles")}
          >
            Parent Profiles
          </div>
          <div
            className={`sidebar-item ${
              activeSection === "Player Profiles" ? "active-profile" : "inactive-profile"
            }`}
            onClick={() => handleSubmenuClick("Player Profiles")}
          >
            Player Profiles
          </div>
        </div>
      )}

      {/* Other Menu Items */}
      <div
        className={`sidebar-item ${activeSection === "Appointments" ? "active" : ""}`}
        onClick={() => handleItemClick("Appointments")}
      >
        Appointments
      </div>
      <div
        className={`sidebar-item ${activeSection === "Scheduler" ? "active" : ""}`}
        onClick={() => handleItemClick("Scheduler")}
      >
        Scheduler
      </div>
      <div
        className={`sidebar-item ${activeSection === "Billing & Payments" ? "active" : ""}`}
        onClick={() => handleItemClick("Billing & Payments")}
      >
        Billing & Payments
      </div>
      <div
        className={`sidebar-item ${activeSection === "Trainers Section" ? "active" : ""}`}
        onClick={() => handleItemClick("Trainers Section")}
      >
        Trainers Section
      </div>
      <div
        className={`sidebar-item ${activeSection === "Reports & Analytics" ? "active" : ""}`}
        onClick={() => handleItemClick("Reports & Analytics")}
      >
        Reports & Analytics
      </div>
    </div>
  );
};

export default Sidebar;