import { createTheme } from "@mui/material/styles";

import { MuiButton } from "./components/button";
import { MuiAppBar } from "./components/appbar";
import { MuiInputBase } from "./components/input";
import { MuiTableBody } from "./components/table";

import { mixins } from "./foundations/mixins";
import { typography } from "./foundations/typography";
import { defaultPalette } from "./foundations/palette";

const theme = createTheme({
  palette: defaultPalette,
  typography: typography,
  mixins: mixins,
  components: {
    MuiButton: MuiButton,
    MuiInputBase: MuiInputBase,
    MuiAppBar: MuiAppBar,
    MuiTableBody: MuiTableBody,
  },
  density: "default",
  fontFamily: {
    heading: "",
    subheading: "",
    body: "",
  },
});

export default theme;
