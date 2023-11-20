"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";

import AppBar from "@/components/organisms/appbar/AppBar";
import Sidebar from "@/components/organisms/sidebar/Sidebar";
import ThemeRegistry from "@/components/theme-registry/ThemeRegistry";
import DrawerHeader from "@/components/molecules/drawer/DrawerHeader";
import useLayoutStore from "@/stores/useLayoutStore";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const {
    layoutState: { isDesktopDrawerOpen },
    setLayoutState,
  } = useLayoutStore();

  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <Sidebar
              isDesktopDrawerOpen={isDesktopDrawerOpen}
              onDrawerToggle={() => setLayoutState("isDesktopDrawerOpen", !isDesktopDrawerOpen)}
            />
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
              {children}
            </Box>
          </Box>
        </ThemeRegistry>
      </body>
    </html>
  );
}
