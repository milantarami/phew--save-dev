"use client";

import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

const Wrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  padding: theme.density,
}));

export default Wrapper;
