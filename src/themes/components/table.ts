import { Components } from "@mui/material/styles";

export const MuiTable: Components["MuiTable"] = {};

export const MuiTableBody: Components["MuiTableBody"] = {
  styleOverrides: {
    root: {
      "& tr:nth-of-type(even)": {
        td: {
          background: "#FBFBFB",
        },
      },
    },
  },
};
