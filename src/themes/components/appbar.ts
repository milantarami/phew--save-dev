import { Components } from "@mui/material/styles";

export const MuiAppBar: Components["MuiAppBar"] = {
  styleOverrides: {
    root: {
      height: "30px",
      border: "1px solid red",
      zIndex: 9999,
    },
  },
};
