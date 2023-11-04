import { Components } from "@mui/material/styles";

export const MuiInputBase: Components["MuiInputBase"] = {
  styleOverrides: {
    root: {
      borderRadius: "8px !important",
      "& .Mui-disabled": {
        cursor: "not-allowed",
        caretColor: "#D82809",
        textFillColor: "#757373",
        webkitTextFillColor: "#757373",
        "-moz-text-fill-color": "#757373",
      },
    },
    input: {
      height: "20px",
    },
    inputMultiline: {
      height: "100px !important",
    },
  },
};
