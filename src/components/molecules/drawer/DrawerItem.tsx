import React, { Ref } from "react";
import { useRouter } from "next/navigation";

import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";

import { UI } from "@/types/ui";

interface DrawerItemProps {
  data: UI.DrawerItem | UI.DrawerDropdownItem;
  isDesktopDrawerCollapsed: boolean;
}

const DrawerItem = React.forwardRef<any, DrawerItemProps>((props, ref) => {
  const { data, isDesktopDrawerCollapsed } = props;

  const { icon, key, label, type } = data;

  const router = useRouter();

  return (
    <ListItem key={key} ref={ref} disablePadding>
      <ListItemButton
        onClick={() => {
          if (type === "button") {
            data.onClick?.();
          } else if (type === "link") {
            router.push(data.path);
          } else if (type === "dropdown") {
          }
        }}
      >
        <ListItemIcon>{icon}</ListItemIcon>
        {!isDesktopDrawerCollapsed && <ListItemText primary={label} />}
      </ListItemButton>
    </ListItem>
  );
});

export default DrawerItem;
