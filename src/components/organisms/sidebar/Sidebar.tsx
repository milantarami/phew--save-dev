"use client";

import React from "react";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import { useTheme } from "@mui/material/styles";
import MailIcon from "@mui/icons-material/Mail";
import IconButton from "@mui/material/IconButton";
import useLayoutStore from "@/stores/useLayoutStore";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import ListItemButton from "@mui/material/ListItemButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import DrawerHeader from "@/components/molecules/drawer/DrawerHeader";
import DesktopDrawer from "@/components/molecules/drawer/DesktopDrawer";

import useDrawerItems from "@/hooks/useDrawerItems";

interface SidebarProps {
  isDesktopDrawerOpen?: boolean;
  onDrawerToggle?: () => void;
}

export default function Sidebar(props: SidebarProps) {
  const theme = useTheme();

  const { items } = useDrawerItems();

  const { isDesktopDrawerOpen, onDrawerToggle } = props;

  return (
    <DesktopDrawer variant="permanent" open={isDesktopDrawerOpen}>
      <DrawerHeader>
        <IconButton onClick={onDrawerToggle}>
          {theme.direction === "rtl" ? (
            isDesktopDrawerOpen ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )
          ) : isDesktopDrawerOpen ? (
            <ChevronLeftIcon />
          ) : (
            <ChevronRightIcon />
          )}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List>
        {items.map((item, index) => (
          <ListItem key={item.key} disablePadding sx={{ display: "block" }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: isDesktopDrawerOpen ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: isDesktopDrawerOpen ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.label} sx={{ opacity: isDesktopDrawerOpen ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </DesktopDrawer>
  );
}
