import { Routes, Route } from "react-router-dom";
import Layout from "../Components/Layout/layout";
import DashboardPage from "../Pages/Dashboard";
import ParentProfiles from "../Pages/UserManagement/ParentProfiles/ParentProfiles";
import PlayerProfiles from "../Pages/UserManagement/PlayerProfiles/PlayerProfiles";
import Appointments from "../Pages/Appointments/Appointments";


const Routing = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/user-management/parent-profile" element={<ParentProfiles />} />
        <Route path="/user-management/player-profile" element={<PlayerProfiles />} />
        <Route path="/appointments" element={<Appointments />} />
      </Route>
    </Routes>
  );
};

export default Routing;
