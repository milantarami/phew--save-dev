import React from "react";

export type Icon =
  | React.ReactNode
  | React.ReactElement
  | React.LazyExoticComponent;

export declare namespace UI {
  export type DrawerItem =
    | {
        type: "link";
        key: string;
        icon: Icon;
        label: string;
        path: string;
        isEnabled: boolean;
      }
    | {
        type: "button";
        key: string;
        icon: Icon;
        label: string;
        onClick: () => void;
        isEnabled: boolean;
      };

  export type DrawerDropdownItem = {
    type: "dropdown";
    key: string;
    icon: Icon;
    label: string;
    children: DrawerItem[];
    isEnabled: boolean;
  };
}
