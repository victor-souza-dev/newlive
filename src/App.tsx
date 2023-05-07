import { PrivateRoute } from "./Context/PrivateRoute/PrivateRoute";
import { SwitchThemeProvider } from "./Context/SwitchContext/SwitchContextProvider";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <SwitchThemeProvider>
        <Outlet />
      </SwitchThemeProvider>
    </>
  );
}

export default App;
