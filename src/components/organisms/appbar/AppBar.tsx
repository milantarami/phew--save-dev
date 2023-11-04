import React from "react";
import Toolbar from "@mui/material/Toolbar";
import MuiAppBar from "@mui/material/AppBar";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import UiConfig from "@/config/ui.config";

interface AppBarProps {
  onDrawerToggle?: () => void;
}

export default function AppBar(props: AppBarProps) {
  const { onDrawerToggle } = props;

  return (
    <MuiAppBar
      position="fixed"
      sx={{
        width: { md: `calc(100% - ${UiConfig.desktopDrawerWidth}px)` },
        ml: { md: `${UiConfig.desktopDrawerWidth}px` },
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={onDrawerToggle}
          sx={{ mr: 2, display: { md: "none" } }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap component="div">
          Responsive drawer
        </Typography>
      </Toolbar>
    </MuiAppBar>
  );
}
