// import React, { useState } from "react";
// import Header from "./Components/Header/Header";
// import Sidebar from "./Components/Sidebar/Sidebar";
// import Dashboard from "./Components/Sidebar/Dashboard";
// import "./App.css";

// function App() {
//   const [selectedSection, setSelectedSection] = useState("Dashboard");

//   const renderContent = () => {
//     switch (selectedSection) {
//       case "Dashboard":
//         return <Dashboard />;
//       // Add other components here
//       default:
//         return <Dashboard />;
//     }
//   };

//   return (
//     <div className="app">
//       <Header />
//       <div className="main-layout">
//         <Sidebar setSelectedSection={setSelectedSection} />
//         <div className="content">{renderContent()}</div>
//       </div>
//     </div>
//   );
// }

// export default App;


// App.js
import React, { useState } from "react";
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import Dashboard from "./Components/Sidebar/Dashboard/Dashboard";
import ParentProfiles from "./Components/Sidebar/ParentProfiles/ParentProfiles";
import PlayerProfile from "./Components/Sidebar/PlayerProfiles/PlayerProfiles";
import Appointments from "./Components/Sidebar/Appointments/Appointments";
import "./App.css";

function App() {
  const [selectedSection, setSelectedSection] = useState("Dashboard");

  const renderContent = () => {
    switch (selectedSection) {
      case "Dashboard":
        return <Dashboard />;
      case "Parent Profiles":
        return <ParentProfiles />;
        case "Player Profiles":
        return <PlayerProfile />;
        case "Appointments":
        return <Appointments />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="app">
      <Header />
      <div className="main-layout">
        <Sidebar setSelectedSection={setSelectedSection} />
        <div className="content">{renderContent()}</div>
      </div>
    </div>
  );
}

export default App;
