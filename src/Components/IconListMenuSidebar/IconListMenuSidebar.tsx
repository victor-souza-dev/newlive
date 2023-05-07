import { IconListMenu } from "../Sidebar/Drawer.style";

type IconsListMenuSidebarProps = {
  children: JSX.Element;
  open: boolean;
};

export function IconListMenuSidebar({
  children,
  open,
}: IconsListMenuSidebarProps) {
  return (
    <div>
      <IconListMenu>{children}</IconListMenu>
    </div>
  );
}
