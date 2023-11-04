import { Components } from "@mui/material/styles";

export const MuiButton: Components["MuiButton"] = {
  styleOverrides: {
    root: ({ ownerState, theme }) => ({
      textTransform: "none",
    }),
    sizeSmall: {
      borderRadius: "32px",
    },
    sizeMedium: {
      borderRadius: "32px",
      height: "40px",
      fontWeight: 600,
    },
    sizeLarge: {
      borderRadius: "32px",
      height: "48px",
      fontWeight: 600,
    },
  },
};
