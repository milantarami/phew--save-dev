import { useState } from "react";

import { drawerItems } from "@/data/drawer-items";

const useDrawerItems = () => {
  const [items, setItems] = useState(drawerItems);

  const swap = () => {
    //
  };

  return { items, setItems, swap };
};

export default useDrawerItems;
