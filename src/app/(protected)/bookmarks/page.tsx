import React from "react";
import { Metadata } from "next";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import Bookmark from "@/components/molecules/bookmark/Bookmark";

export const metadata: Metadata = {
  title: "Phew Save Dev | Bookmarks",
};

export default function Page() {
  const data = [
    {
      favicon: "",
      src: "",
      title: "Design Patterns in React (Adapter)",
    },
    {
      favicon: "",
      src: "",
      title: "The homepage | developers deserve",
    },
  ];

  return (
    <Grid container>
      <Grid item xs={12}>
        <Box>
          {data.map((b, i) => (
            <Bookmark key={i} />
          ))}
        </Box>
      </Grid>
      <Grid item xs={12}>
        asdfa
      </Grid>
    </Grid>
  );
}
