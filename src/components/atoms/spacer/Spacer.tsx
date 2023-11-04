"use client";

import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

interface SpacerProps {
  height?: string | number;
  width?: string | number;
}

const Spacer = styled(Box)<SpacerProps>(
  ({ height = "16px", width = "100%" }) => ({
    height: typeof height === "number" ? `${height}rem` : height,
    width: typeof width === "number" ? `${width}rem` : width,
  }),
);

export default Spacer;
