import React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import Toolbar from "@mui/material/Toolbar";
import { useRouter } from "next/navigation";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";

import BookmarksIcon from "@mui/icons-material/Bookmarks";

import { UI } from "@/types/ui";
import UiConfig from "@/config/ui.config";

interface SidebarProps {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  isMobileDrawerOpen: boolean;
  onMobileDrawerClose: () => void;
  drawerItems: UI.DrawerItem[];
}

export default function Sidebar(props: SidebarProps) {
  const router = useRouter();

  const { window, isMobileDrawerOpen, onMobileDrawerClose } = props;

  const drawerItems: UI.DrawerItem[] = [
    {
      type: "link",
      key: "bookmarks",
      icon: <BookmarksIcon />,
      label: "Bookmarks",
      path: "/bookmarks",
    },
    {
      type: "link",
      key: "bookmarks",
      icon: <BookmarksIcon />,
      label: "Bookmarks",
      path: "/bookmarks",
    },
  ];

  const drawer = (
    <div>
      <Toolbar>logo here</Toolbar>
      <Divider />
      <List>
        {drawerItems.map((item) => {
          if (item.type === "link") {
            return (
              <ListItem key={item.key} disablePadding>
                <ListItemButton onClick={() => router.push(item.path)}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </ListItem>
            );
          }

          <ListItem key={item.key} disablePadding>
            <ListItemButton onClick={item.onClick}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>;
        })}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box
      component="nav"
      sx={{ width: { md: UiConfig.desktopDrawerWidth }, flexShrink: { sm: 0 } }}
      aria-label="mailbox folders"
    >
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <Drawer
        container={container}
        variant="temporary"
        open={isMobileDrawerOpen}
        onClose={onMobileDrawerClose}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: UiConfig.desktopDrawerWidth,
          },
        }}
      >
        {drawer} mobile
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", md: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: UiConfig.desktopDrawerWidth,
          },
        }}
        open
      >
        {drawer} desktop
      </Drawer>
    </Box>
  );
}
