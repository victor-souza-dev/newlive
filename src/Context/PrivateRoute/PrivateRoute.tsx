import ButtonAppBar from "../../Components/AppBar/AppBar";
import { Sidebar } from "../../Components/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

export function PrivateRoute() {
  return (
    <div>
      <ButtonAppBar />
      <Sidebar />
      <Outlet />
    </div>
  );
}
