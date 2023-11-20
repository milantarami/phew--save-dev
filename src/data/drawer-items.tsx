import dynamic from "next/dynamic";

import { FaBookmark } from "react-icons/fa6";

const EventNoteRoundedIcon = dynamic(() => import("@mui/icons-material/EventNoteRounded"));
const TextSnippetRoundedIcon = dynamic(() => import("@mui/icons-material/TextSnippetRounded"));
const CorporateFareRoundedIcon = dynamic(() => import("@mui/icons-material/CorporateFareRounded"));
const BookmarkBorderRoundedIcon = dynamic(() => import("@mui/icons-material/BookmarkBorderRounded"));
const NotificationAddRoundedIcon = dynamic(() => import("@mui/icons-material/NotificationAddRounded"));
const PlaylistAddCheckRoundedIcon = dynamic(() => import("@mui/icons-material/PlaylistAddCheckRounded"));

import { UI } from "@/types/ui";

export const drawerItems: (UI.DrawerItem | UI.DrawerDropdownItem)[] = [
  {
    type: "link",
    key: "bookmarks",
    icon: <FaBookmark />,
    label: "Bookmarks",
    path: "/bookmarks",
    isEnabled: false,
  },
  {
    type: "link",
    key: "todos",
    icon: <PlaylistAddCheckRoundedIcon />,
    label: "Todos",
    path: "/todos",
    isEnabled: false,
  },
  {
    type: "link",
    key: "reminders",
    icon: <NotificationAddRoundedIcon />,
    label: "Reminders",
    path: "/reminders",
    isEnabled: false,
  },
  {
    type: "link",
    key: "notes",
    icon: <TextSnippetRoundedIcon />,
    label: "Notes",
    path: "/notes",
    isEnabled: false,
  },
  {
    type: "link",
    key: "organizations",
    icon: <CorporateFareRoundedIcon />,
    label: "Organizations",
    path: "/organizations",
    isEnabled: false,
  },
  {
    type: "link",
    key: "events",
    icon: <EventNoteRoundedIcon />,
    label: "Events",
    path: "/events",
    isEnabled: false,
  },
];
