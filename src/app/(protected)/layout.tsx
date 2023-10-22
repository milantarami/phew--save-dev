"use client";

import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

import AppBar from "@/components/organisms/appbar/AppBar";
import Sidebar from "@/components/molecules/sidebar/Sidebar";
import ThemeRegistry from "@/components/theme-registry/ThemeRegistry";
import IndexedDbSupport from "@/components/atoms/indexed-db/IndexedDbSupport";

import UiConfig from "@/config/ui.config";
import useLayoutStore from "@/stores/useLayoutStore";
import useDetectScreen from "@/hooks/useDetectScreen";
import { useEffect } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const {
    layoutState: { isMobileDrawerOpen, isDesktopDrawerCollapsed, drawerItems },
    setLayoutState,
  } = useLayoutStore();

  const { isTablet } = useDetectScreen();

  useEffect(() => {
    localStorage.setItem("test", "value");
  }, []);

  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          <Box sx={{ display: "flex" }}>
            <AppBar
              onDrawerToggle={() => {
                if (isTablet) {
                  setLayoutState("isMobileDrawerOpen", !isMobileDrawerOpen);
                } else {
                  setLayoutState(
                    "isDesktopDrawerCollapsed",
                    !isDesktopDrawerCollapsed,
                  );
                }
              }}
            />
            <Sidebar
              isMobileDrawerOpen={isMobileDrawerOpen}
              onMobileDrawerClose={() =>
                setLayoutState("isMobileDrawerOpen", !isMobileDrawerOpen)
              }
              drawerItems={drawerItems}
            />
            <Box
              component="main"
              sx={{
                flexGrow: 1,
                p: 1,
                width: { sm: `calc(100% - ${UiConfig.desktopDrawerWidth}px)` },
              }}
            >
              <Toolbar />
              {children}
            </Box>
          </Box>
          <IndexedDbSupport />
        </ThemeRegistry>
      </body>
    </html>
  );
}
