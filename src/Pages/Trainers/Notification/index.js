import React from "react";
import ReactDOM from "react-dom/client";
// import Sidebar from "./components/Sidebar";
import Header from "../../../Components/Header/Header";
import "./style.css";

function App() {
  return (
    <div>
      {/* <Sidebar /> */}
      <div>
        <Header />
        <div className="notifications-container">
          <h2>Notifications</h2>
          <div className="notifications-header">
            <button>Type</button>
            <button>Status</button>
          </div>
          <div className="notifications-list">
            {Array(6)
              .fill()
              .map((_, index) => (
                <div className="notification-item" key={index}></div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
