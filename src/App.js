import React from "react";
import Routing from "./Routes/Routing";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { LoginProvider } from "./APIContext/LoginContext";
import { ParentProfileProvider } from "./APIContext/ParentProfileContext";
import "./App.css";

function App() {
  return (
    <div className="app">
      <LoginProvider>
        <ParentProfileProvider>
          <Routing />
        </ParentProfileProvider>
      </LoginProvider>
    </div>
  );
}

export default App;
