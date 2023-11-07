import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

import AppConfig from "@/config/app.config";
import { UI } from "@/types/ui";

interface LayoutState {
  isMobileDrawerOpen: boolean;
  isDesktopDrawerCollapsed: boolean;
  drawerItems: UI.DrawerItem[];
}

interface LayoutStoreState {
  layoutState: LayoutState;
  setLayoutState: <T extends keyof LayoutState, V extends LayoutState[T]>(key: T, value: V) => void;
}

const initialState: LayoutState = {
  isMobileDrawerOpen: false,
  isDesktopDrawerCollapsed: false,
  drawerItems: [],
};

const useLayoutStore = create<LayoutStoreState>()(
  devtools(
    persist(
      (set) => ({
        layoutState: initialState,
        setLayoutState: <T extends keyof LayoutState, V extends LayoutState[T]>(key: T, value: V) =>
          set((state) => ({
            layoutState: {
              ...state.layoutState,
              [key]: value,
            },
          })),
      }),
      {
        name: "dashboard-layout-state",
        version: AppConfig.version,
      },
    ),
  ),
);

export default useLayoutStore;
