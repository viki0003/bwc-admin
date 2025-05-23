import React from "react";
import "./style.css";
import Header from "../../../Components/Header/Header";
// import Sidebar from "../../../Components/Sidebar/Sidebar"; // make sure this path is correct
import AvailabilitySection from "../../../Components/Trainers/MainComp/MainComp";
import ResponseForm from "../../../Components/Trainers/Response/Resposne";

export default function MainLayout() {
  return (
    <div className="main-layout">
      {/* <Sidebar /> */}
      <div className="main-right">
        <Header />
        <div className="availability-section">
          <AvailabilitySection />
          <div>
            <ResponseForm />
          </div>
        </div>
      </div>
    </div>
  );
}
