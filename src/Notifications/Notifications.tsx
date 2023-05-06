import NotificationsIcon from "@mui/icons-material/Notifications";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { useState } from "react";
import { StyledEmptyNotifications, StyledMenu } from "./Notifications.style";
// import MenuItem from "@mui/material/MenuItem";

export function Notifications() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [lengthNotifications, setLengthNotifications] = useState<number>(0);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Tooltip title={`${lengthNotifications} Notificações`}>
        <IconButton
          size="large"
          aria-label={`show ${lengthNotifications} new notifications`}
          color="inherit"
          onClick={handleMenu}
        >
          <Badge badgeContent={lengthNotifications} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
      </Tooltip>
      <StyledMenu
        id="menu-appbar"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {lengthNotifications <= 0 && (
          <StyledEmptyNotifications>
            Não há nada de novo aqui
          </StyledEmptyNotifications>
        )}
      </StyledMenu>
    </div>
  );
}
