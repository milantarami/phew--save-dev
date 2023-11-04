import * as createTheme from "@mui/material/styles/createTheme";
import * as createPalette from "@mui/material/styles/createPalette";

interface Shade {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
  950: string;
}

interface FontFamily {
  heading: string;
  subheading: string;
  body: string;
}

declare module "@mui/material/styles/createTheme" {
  export interface ThemeOptions {
    density: "default" | "comfortable" | "compact";
    fontFamily: FontFamily;
  }

  export interface Theme {
    density: "default" | "comfortable" | "compact";
  }
}

declare module "@mui/material/styles/createPalette" {
  interface PaletteColor {
    lighter: string;
    darker: string;
  }
  interface SimplePaletteColorOptions {
    lighter: string;
    main: string;
    darker: string;
  }

  interface TypeText {
    tertiary: string;
    link: string;
    primary: string;
    secondary: string;
    info: string;
    warning: string;
    error: string;
  }

  export interface Palette {
    shade: Shade;
    surface: string;
    border: string;
  }

  export interface PaletteOptions {
    shade: Shade;
    surface: string;
    border: string;
  }
}
