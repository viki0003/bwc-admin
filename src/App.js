import Routing from "./Routes/Routing";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { ParentProvider } from "./APIContext/ParentContext";
import { PlayerAccountProvider } from "./APIContext/PlayerAccountContext";
import "./App.css";
import { useLogin } from "./APIContext/LoginContext";
import { SportsProvider } from "./APIContext/SportsContext";

function App() {
  const { user } = useLogin();
  return (
    <ParentProvider user={user}>
      <PlayerAccountProvider>
        <SportsProvider>
          <Routing />
        </SportsProvider>
      </PlayerAccountProvider>
    </ParentProvider>
  );
}

export default App;
