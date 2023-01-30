import { ToastContainer } from "react-toastify";
import { RoutesMain as Routes } from "./routes";
import { GlobalStyle } from "./styles/global";
import "react-toastify/dist/ReactToastify.css";
import { UserProvider } from "./contexts/UserContext";
import { TechProvider } from "./contexts/TechContext";

const App = () => {
  return (
    <div>
      <ToastContainer />
      <GlobalStyle />
      <UserProvider>
        <TechProvider>
        <Routes />
        </TechProvider>
      </UserProvider>
    </div>
  );
};

export default App;
