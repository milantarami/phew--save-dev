import React from "react";
import { Metadata } from "next";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import Bookmark from "@/components/molecules/bookmark/Bookmark";

export const metadata: Metadata = {
  title: "Phew Save Dev | Bookmarks",
};

export default function Page() {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Box>
          <Bookmark />
          <Bookmark />
        </Box>
      </Grid>
      <Grid item xs={12}>
        asdfa
      </Grid>
    </Grid>
  );
}
