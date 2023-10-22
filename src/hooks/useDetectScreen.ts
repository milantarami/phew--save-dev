import { useEffect, useMemo, useState } from "react";
import { useTheme } from "@mui/material/styles";

type DetectScreenState = {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
};

export default function useDetectScreen(): DetectScreenState {
  const theme = useTheme();

  const MOBILE_SCREEN_MAX_SIZE = theme.breakpoints.values.sm;

  const TABLET_SCREEN_MAX_SIZE = theme.breakpoints.values.md;

  const [width, setWidth] = useState(
    typeof window === "undefined" ? 0 : window.innerWidth,
  );

  const screenState = useMemo(() => {
    if (width <= MOBILE_SCREEN_MAX_SIZE) {
      return {
        isMobile: true,
        isTablet: false,
        isDesktop: false,
      };
    } else if (
      width > MOBILE_SCREEN_MAX_SIZE &&
      width <= TABLET_SCREEN_MAX_SIZE
    ) {
      return {
        isMobile: false,
        isTablet: true,
        isDesktop: false,
      };
    } else {
      return {
        isMobile: false,
        isTablet: false,
        isDesktop: true,
      };
    }
  }, [width]);

  const handleWindowSizeChange = () => {
    setWidth(window !== undefined ? window.innerWidth : 0);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  return screenState;
}
