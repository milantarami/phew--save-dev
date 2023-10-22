/* eslint-disable filenames-simple/typescript-module-declaration */
/* eslint-disable no-restricted-imports */
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
