import { lazy } from 'react'

const EventNoteRoundedIcon = lazy(() => import('@mui/icons-material/EventNoteRounded'))
const TextSnippetRoundedIcon = lazy(() => import('@mui/icons-material/TextSnippetRounded'))
const CorporateFareRoundedIcon = lazy(() => import('@mui/icons-material/CorporateFareRounded'))
const BookmarkBorderRoundedIcon = lazy(() => import('@mui/icons-material/BookmarkBorderRounded'))
const NotificationAddRoundedIcon = lazy(() => import('@mui/icons-material/NotificationAddRounded'))
const PlaylistAddCheckRoundedIcon = lazy(() => import('@mui/icons-material/PlaylistAddCheckRounded'))

import { UI } from '@/types/ui'

export const drawerItems: (UI.DrawerItem | UI.DrawerDropdownItem)[] = [
  {
    type: 'link',
    key: 'bookmarks',
    icon: BookmarkBorderRoundedIcon,
    label: 'Bookmarks',
    path: '/bookmarks',
    isEnabled: false,
  },
  {
    type: 'link',
    key: 'todos',
    icon: PlaylistAddCheckRoundedIcon,
    label: 'Todos',
    path: '/todos',
    isEnabled: false,
  },
  {
    type: 'link',
    key: 'reminders',
    icon: NotificationAddRoundedIcon,
    label: 'Reminders',
    path: '/reminders',
    isEnabled: false,
  },
  {
    type: 'link',
    key: 'notes',
    icon: TextSnippetRoundedIcon,
    label: 'Notes',
    path: '/notes',
    isEnabled: false,
  },
  {
    type: 'link',
    key: 'organizations',
    icon: CorporateFareRoundedIcon,
    label: 'Organizations',
    path: '/organizations',
    isEnabled: false,
  },
  {
    type: 'link',
    key: 'events',
    icon: EventNoteRoundedIcon,
    label: 'Events',
    path: '/events',
    isEnabled: false,
  },
]
