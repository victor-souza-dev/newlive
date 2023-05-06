import {
  ContainerIconOpenSidebar,
  ContainerIcons,
  DrawerStyle,
  EndIconSidebar,
  IconOpenSidebar,
  IconListMenu,
  ContainerListIcons,
} from "./Drawer.style";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { SwitchThemeIcon } from "../SwitchThemeIcon/SwitchThemeIcon";
import HomeIcon from "@mui/icons-material/Home";

export function Sidebar() {
  const [sidebar, setSidebar] = useState(false);

  return (
    <DrawerStyle
      variant={"permanent"}
      open={sidebar}
      onClose={() => setSidebar(false)}
      width={sidebar}
    >
      <ContainerIcons>
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
        <ContainerListIcons>
          <IconListMenu>
            <HomeIcon />
          </IconListMenu>
        </ContainerListIcons>
      </ContainerIcons>
      <EndIconSidebar>
        <SwitchThemeIcon />
      </EndIconSidebar>
    </DrawerStyle>
  );
}
