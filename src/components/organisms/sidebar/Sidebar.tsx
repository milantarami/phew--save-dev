"use client";

import React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Toolbar from "@mui/material/Toolbar";

import Spacer from "@/components/atoms/spacer/Spacer";
import Drawer from "@/components/molecules/drawer/Drawer";
import DrawerItem from "@/components/molecules/drawer/DrawerItem";
import DrawerCollapseButton from "@/components/atoms/button/DrawerCollapseButton";

import { UI } from "@/types/ui";
import UiConfig from "@/config/ui.config";
import useDrawerItems from "@/hooks/useDrawerItems";
import useLayoutStore from "@/stores/useLayoutStore";
import useDetectScreen from "@/hooks/useDetectScreen";

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

  const { items: drawerItems } = useDrawerItems();

  const { layoutState, setLayoutState } = useLayoutStore();

  const { isDesktopDrawerCollapsed, isMobileDrawerOpen } = layoutState;

  const handleCloseMobileDrawer = () => {
    setLayoutState("isMobileDrawerOpen", !isMobileDrawerOpen);
  };

  const drawer = <div></div>;

  return (
    <Box
      // component='nav'
      sx={{ width: { md: UiConfig.desktopDrawerWidth }, flexShrink: { sm: 0 } }}
      aria-label="sidebar-menus"
    >
      <Drawer isMobileDrawerOpen={isMobileDrawerOpen} onMobileDrawerClose={handleCloseMobileDrawer}>
        <Toolbar>l</Toolbar>
        {/* <Divider /> */}
        <Spacer height="45px" />
        <DrawerCollapseButton isDrawerOpen={true} />
        <List>
          {drawerItems.map((item) => {
            return <DrawerItem key={item.key} data={item} isDesktopDrawerCollapsed={isDesktopDrawerCollapsed} />;
          })}
        </List>
      </Drawer>
    </Box>
  );
}
