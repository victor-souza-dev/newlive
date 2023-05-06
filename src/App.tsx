import ButtonAppBar from "./AppBar/AppBar";
import { SwitchThemeProvider } from "./Context/SwitchContext/SwitchContextProvider";
import { Sidebar } from "./Sidebar/Sidebar";

function App() {
  return (
    <>
      <SwitchThemeProvider>
        <ButtonAppBar></ButtonAppBar>
        <Sidebar />
      </SwitchThemeProvider>
    </>
  );
}

export default App;
