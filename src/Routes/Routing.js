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
import Scheduler from "../Pages/Scheduler/Scheduler";
import ViewSession from "../Pages/Scheduler/ViewSession/ViewSession";
import AddSession from "../Pages/Scheduler/AddSession/AddSession";
import TrainersLogin from "../Pages/Trainers/TrainersLogin/TrainersLogin";
import TrainersCreateAccount from "../Pages/Trainers/TrainersCreateAccount/TrainersCreateAccount";
import TrainerManagement from "../Pages/TrainerManagement/TrainerManagement";
import ReportsAnalytics from "../Pages/ReportsAnalytics/ReportsAnalytics";

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
        <Route path="/scheduler" element={<Scheduler />} />
        <Route path="/scheduler/view-session" element={<ViewSession />} />
        <Route path="/scheduler/add-session" element={<AddSession />} />
        <Route path="/trainer-management" element={<TrainerManagement />} />
        <Route path="/reports-analytics" element={<ReportsAnalytics />} />
      </Route>
      <Route path="/trainers-login" element={<TrainersLogin />} />
      <Route
        path="/trainers-create-account"
        element={<TrainersCreateAccount />}
      />
    </Routes>
  );
};

export default Routing;
