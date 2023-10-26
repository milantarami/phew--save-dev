import React from "react";
import { alpha, styled } from "@mui/material/styles";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";

const StyledButton = styled(IconButton)(({ theme }) => ({
  border: `1px solid ${theme.palette.border}`,
  position: "absolute",
  right: "-15px",
  borderRadius: "6px",
  top: `calc(${theme.mixins.toolbar.height} + 15px)`,
  height: "30px",
  width: "30px",
  "&:hover": {
    background: alpha(theme.palette.border, 0.5),
  },
}));

interface DrawerCollapseButtonProps extends IconButtonProps {
  isDrawerOpen: boolean;
}

const DrawerCollapseButton = React.forwardRef<
  HTMLButtonElement,
  DrawerCollapseButtonProps
>(({ isDrawerOpen }, ref) => (
  <StyledButton size="small" disableRipple>
    {isDrawerOpen ? <ChevronLeftRoundedIcon /> : <ChevronRightRoundedIcon />}
  </StyledButton>
));

export default DrawerCollapseButton;
