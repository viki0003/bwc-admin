import Routing from "./Routes/Routing";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { ParentProvider } from "./APIContext/ParentContext";
import { PlayerAccountProvider } from "./APIContext/PlayerAccountContext";
import "./App.css";
import { useLogin } from "./APIContext/LoginContext";

function App() {
  const { user } = useLogin();
  return (
    <ParentProvider user={user}>
      <PlayerAccountProvider>
        <Routing />
      </PlayerAccountProvider>
    </ParentProvider>
  );
}

export default App;
