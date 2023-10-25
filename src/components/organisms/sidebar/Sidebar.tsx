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

import EditNoteRoundedIcon from "@mui/icons-material/EditNoteRounded";
import EventNoteRoundedIcon from "@mui/icons-material/EventNoteRounded";
import CorporateFareRoundedIcon from "@mui/icons-material/CorporateFareRounded";
import BookmarkBorderRoundedIcon from "@mui/icons-material/BookmarkBorderRounded";
import TextSnippetRoundedIcon from "@mui/icons-material/TextSnippetRounded";
import NotificationAddRoundedIcon from "@mui/icons-material/NotificationAddRounded";
import PlaylistAddCheckRoundedIcon from "@mui/icons-material/PlaylistAddCheckRounded";

import { UI } from "@/types/ui";
import UiConfig from "@/config/ui.config";
import DrawerItem from "@/components/molecules/drawer/DrawerItem";

interface SidebarProps {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  isMobileDrawerOpen: boolean;
  onMobileDrawerClose: () => void;
  isDesktopDrawerCollapsed: boolean;
  drawerItems: UI.DrawerItem[];
}

export default function Sidebar(props: SidebarProps) {
  const router = useRouter();

  const {
    window,
    isDesktopDrawerCollapsed,
    isMobileDrawerOpen,
    onMobileDrawerClose,
  } = props;

  const drawerItems: (UI.DrawerItem | UI.DrawerDropdownItem)[] = [
    {
      type: "link",
      key: "bookmarks",
      icon: <BookmarkBorderRoundedIcon />,
      label: "Bookmarks",
      path: "/bookmarks",
    },
    {
      type: "link",
      key: "todos",
      icon: <PlaylistAddCheckRoundedIcon />,
      label: "Todos",
      path: "/todos",
    },
    {
      type: "link",
      key: "reminders",
      icon: <NotificationAddRoundedIcon />,
      label: "Reminders",
      path: "/reminders",
    },
    {
      type: "link",
      key: "notes",
      icon: <TextSnippetRoundedIcon />,
      label: "Notes",
      path: "/notes",
    },
    {
      type: "link",
      key: "organizations",
      icon: <CorporateFareRoundedIcon />,
      label: "Organizations",
      path: "/organizations",
    },
    {
      type: "link",
      key: "events",
      icon: <EventNoteRoundedIcon />,
      label: "Events",
      path: "/events",
    },
  ];

  const drawer = (
    <div>
      <Toolbar>logo here</Toolbar>
      <Divider />
      <List>
        {drawerItems.map((item) => {
          return <DrawerItem data={item} />;
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
        {drawer}
      </Drawer>
    </Box>
  );
}
