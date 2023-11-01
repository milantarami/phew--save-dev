import React from 'react'
import { styled } from '@mui/material/styles'
import MuiDrawer, { DrawerProps as MuiDrawerProps } from '@mui/material/Drawer'

import UiConfig from '@/config/ui.config'
import useDetectScreen from '@/hooks/useDetectScreen'

const CustomDrawer = styled(MuiDrawer)(({ theme }) => ({
  '& .MuiDrawer-paper': {
    boxSizing: 'border-box',
    overflow: 'visible',
  },
  [theme.breakpoints.down('sm')]: {
    display: { xs: 'block', md: 'none' },
    '& .MuiDrawer-paper': {
      boxSizing: 'border-box',
      width: UiConfig.desktopDrawerWidth,
    },
  },
  [theme.breakpoints.up('sm')]: {
    position: 'relative',
    display: { xs: 'none', md: 'block' },
    '& .MuiDrawer-paper': {
      boxSizing: 'border-box',
      width: UiConfig.desktopDrawerWidth,
    },
  },
}))

interface DrawerProps extends MuiDrawerProps {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window
  isMobileDrawerOpen: boolean
  onMobileDrawerClose: () => void
  children: React.ReactNode
}

export default function Drawer(props: DrawerProps) {
  const { window, isMobileDrawerOpen, onMobileDrawerClose, children } = props

  const { isMobile } = useDetectScreen()

  const container = window !== undefined ? () => window().document.body : undefined

  return (
    <CustomDrawer
      component='div'
      {...(isMobile
        ? {
            container,
            variant: 'temporary',
            open: isMobileDrawerOpen,
            onClose: onMobileDrawerClose,
            ModalProps: {
              keepMounted: true, // Better open performance on mobile.
            },
            sx: {},
          }
        : {
            variant: 'permanent',
            sx: {},
            open: true,
          })}
    >
      {children}
    </CustomDrawer>
  )
}
