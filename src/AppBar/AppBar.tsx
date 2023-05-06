import Toolbar from "@mui/material/Toolbar";
import { StyledAppBar, StyledContainerIconsAppBar } from "./AppBar.style";
import { Notifications } from "../Notifications/Notifications";
import { Profile } from "../Profile/Profile";

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
