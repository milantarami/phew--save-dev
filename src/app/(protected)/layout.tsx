"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";

import AppBar from "@/components/organisms/appbar/AppBar";
import Sidebar from "@/components/organisms/sidebar/Sidebar";
import ThemeRegistry from "@/components/theme-registry/ThemeRegistry";
import DrawerHeader from "@/components/molecules/drawer/DrawerHeader";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <AppBar />
            <Sidebar />
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
              <DrawerHeader />
              {children}
            </Box>
          </Box>
        </ThemeRegistry>
      </body>
    </html>
  );
}
