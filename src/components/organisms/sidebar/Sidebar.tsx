import React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import Toolbar from "@mui/material/Toolbar";

import EventNoteRoundedIcon from "@mui/icons-material/EventNoteRounded";
import CorporateFareRoundedIcon from "@mui/icons-material/CorporateFareRounded";
import BookmarkBorderRoundedIcon from "@mui/icons-material/BookmarkBorderRounded";
import TextSnippetRoundedIcon from "@mui/icons-material/TextSnippetRounded";
import NotificationAddRoundedIcon from "@mui/icons-material/NotificationAddRounded";
import PlaylistAddCheckRoundedIcon from "@mui/icons-material/PlaylistAddCheckRounded";

import Drawer from "@/components/molecules/drawer/Drawer";
import DrawerItem from "@/components/molecules/drawer/DrawerItem";
import DrawerCollapseButton from "@/components/molecules/drawer/DrawerCollapseButton";

import { UI } from "@/types/ui";
import UiConfig from "@/config/ui.config";
import useLayoutStore from "@/stores/useLayoutStore";
import useDetectScreen from "@/hooks/useDetectScreen";
import Spacer from "@/components/atoms/spacer/Spacer";

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
  const { isMobile } = useDetectScreen();

  const { layoutState, setLayoutState } = useLayoutStore();

  const { isDesktopDrawerCollapsed, isMobileDrawerOpen } = layoutState;

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

  const handleCloseMobileDrawer = () => {
    setLayoutState("isMobileDrawerOpen", !isMobileDrawerOpen);
  };

  const drawer = (
    <div>
      <Toolbar>l</Toolbar>
      {/* <Divider /> */}
      <Spacer height="45px" />
      <DrawerCollapseButton isDrawerOpen={true} />
      <List>
        {drawerItems.map((item) => {
          return (
            <DrawerItem
              data={item}
              isDesktopDrawerCollapsed={isDesktopDrawerCollapsed}
            />
          );
        })}
      </List>
    </div>
  );

  return (
    <Box
      component="nav"
      sx={{ width: { md: UiConfig.desktopDrawerWidth }, flexShrink: { sm: 0 } }}
      aria-label="sidebar-menus"
    >
      <Drawer
        isMobileDrawerOpen={isMobileDrawerOpen}
        onMobileDrawerClose={handleCloseMobileDrawer}
      >
        {drawer}
      </Drawer>
    </Box>
  );
}
