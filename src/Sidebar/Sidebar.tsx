import {
  ContainerIconOpenSidebar,
  DrawerStyle,
  IconListSidebar,
  IconOpenSidebar,
} from "./Drawer.style";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Divider from "@mui/material/Divider";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { SwitchThemeIcon } from "../SwitchThemeIcon/SwitchThemeIcon";
import { IconButtonStyled } from "../styles/IconButtonStyled";

export function Sidebar() {
  const [sidebar, setSidebar] = useState(false);

  return (
    <div>
      <DrawerStyle
        variant={"permanent"}
        open={sidebar}
        onClose={() => setSidebar(false)}
        width={sidebar}
      >
        <ContainerIconOpenSidebar width={sidebar}>
          <IconOpenSidebar
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => setSidebar(!sidebar)}
          >
            {!sidebar ? <MenuIcon /> : <ChevronLeftIcon />}
          </IconOpenSidebar>
        </ContainerIconOpenSidebar>
        <Divider />
        <IconListSidebar>
          <IconButtonStyled>
            <ChevronLeftIcon />
          </IconButtonStyled>
        </IconListSidebar>
        <IconListSidebar>
          <SwitchThemeIcon />
        </IconListSidebar>
        {/* <HeaderSidebar closedSidebar={setSidebar} />
        <SwitchThemeIcon /> */}
      </DrawerStyle>
    </div>
  );
}
