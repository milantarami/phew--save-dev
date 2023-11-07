"use client";

import React from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

import Center from "@/components/atoms/center/Center";
import Wrapper from "@/components/atoms/wrapper/Wrapper";

import theme from "@/themes/theme";

const BookmarkWrapper = styled(Wrapper)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  // height: "40px",
  gap: theme.spacing(1),
  padding: "4px 8px",
  borderRadius: "10px",
  "&:hover": {
    background: theme.palette.grey[200],
    cursor: "default",
  },
}));

export default function Bookmark() {
  return (
    <BookmarkWrapper>
      <Center>
        <Image src="https://icons.duckduckgo.com/ip3/dev.to.ico" height={16} width={16} alt="favicon" />
      </Center>
      <Box>
        <Typography>Design Patterns in React (Adapter)</Typography>
      </Box>
      <Box></Box>
    </BookmarkWrapper>
  );
}
