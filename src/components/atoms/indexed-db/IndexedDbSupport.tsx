"use client";

import React, { useEffect } from "react";

export default function IndexedDbSupport() {
  useEffect(() => {
    if (!("indexedDB" in window)) {
      console.log("This browser doesn't support IndexedDB");
      return;
    }
  }, []);

  return <></>;
}
