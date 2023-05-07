import Toolbar from "@mui/material/Toolbar";
import { Notifications } from "../Notifications/Notifications";
import { Profile } from "../Profile/Profile";
import { StyledAppBar, StyledContainerIconsAppBar } from "./AppBar.style";

export default function ButtonAppBar() {
  return (
    <StyledAppBar position="static">
      <Toolbar>
        <StyledContainerIconsAppBar>
          <Notifications />
          <Profile />
        </StyledContainerIconsAppBar>
      </Toolbar>
    </StyledAppBar>
  );
}
