import React from "react";

export declare namespace UI {
  export type DrawerItem =
    | {
        type: "link";
        key: string;
        icon: React.ReactNode;
        label: React.ReactNode;
        path: string;
      }
    | {
        type: "button";
        key: string;
        icon: React.ReactNode;
        label: React.ReactNode;
        onClick: () => void;
      };
}
