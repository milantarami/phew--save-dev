import { createTheme } from "@mui/material/styles";
import { defaultPalette } from "./foundations/palette";

import { MuiButton } from "./components/button";
import { MuiAppBar } from "./components/appbar";
import { MuiInputBase } from "./components/input";
import { MuiTableBody } from "./components/table";

import { Typography } from "./foundations/typography";

const theme = createTheme({
  palette: defaultPalette,
  typography: Typography,
  components: {
    MuiButton: MuiButton,
    MuiInputBase: MuiInputBase,
    MuiAppBar: MuiAppBar,
    MuiTableBody: MuiTableBody,
  },
});

export default theme;
