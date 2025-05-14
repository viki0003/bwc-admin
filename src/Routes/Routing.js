import { Routes, Route } from "react-router-dom";
import Layout from "../Components/Layout/layout";
import DashboardPage from "../Pages/Dashboard";
import ParentProfiles from "../Pages/UserManagement/ParentProfiles/ParentProfiles";
import PlayerProfiles from "../Pages/UserManagement/PlayerProfiles/PlayerProfiles";
import Appointments from "../Pages/Appointments/Appointments";
import AddLocation from "../Pages/Dashboard/AddLocation";
import ParentInfo from "../Pages/UserManagement/ParentProfiles/ParentInfo";
import PlayerInfo from "../Pages/UserManagement/PlayerProfiles/PlayerInfo/PlayerInfo";
import SessionDetails from "../Pages/Appointments/SessionDetails/SessionDetails";
import RescheduleSession from "../Pages/Appointments/SessionDetails/RescheduleSession/RescheduleSession";
import CancelSession from "../Pages/Appointments/SessionDetails/CancelSession/CancelSession";

const Routing = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/dashboard/add-a-location" element={<AddLocation />} />
        <Route
          path="/user-management/parent-profile"
          element={<ParentProfiles />}
        />
        <Route
          path="/user-management/player-profile"
          element={<PlayerProfiles />}
        />
        <Route path="/appointments" element={<Appointments />} />
        <Route
          path="/appointments/session-details"
          element={<SessionDetails />}
        />
        <Route
          path="/appointments/reschedule-session"
          element={<RescheduleSession />}
        />
        <Route
          path="/appointments/cancel-session"
          element={<CancelSession />}
        />
        <Route path="/user-management/parent-info" element={<ParentInfo />} />
        <Route path="/user-management/player-info" element={<PlayerInfo />} />
      </Route>
    </Routes>
  );
};

export default Routing;
