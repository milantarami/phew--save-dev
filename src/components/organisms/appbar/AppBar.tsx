"use client";

import React from "react";
import UiConfig from "@/config/ui.config";
import Toolbar from "@mui/material/Toolbar";
import { styled } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";

import useLayoutStore from "@/stores/useLayoutStore";

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const StyledAppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: UiConfig.desktopDrawerWidth,
    width: `calc(100% - ${UiConfig.desktopDrawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export default function AppBar() {
  const {
    layoutState: { isDesktopDrawerOpen },
    setLayoutState,
  } = useLayoutStore();

  return (
    <StyledAppBar position="fixed" open={isDesktopDrawerOpen}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={() => setLayoutState("isDesktopDrawerOpen", true)}
          edge="start"
          sx={{
            marginRight: 5,
            ...(isDesktopDrawerOpen && { display: "none" }),
          }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap component="div">
          Mini variant drawer
        </Typography>
      </Toolbar>
    </StyledAppBar>
  );
}
