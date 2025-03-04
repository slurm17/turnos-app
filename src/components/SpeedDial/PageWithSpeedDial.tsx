import React from 'react'
import SpeedDialCustom from './SpeedDialCustom'
import { Action } from '@/types/Action'
import OptionsBar from '../Layout/OptionsBar'
import { Theme, useMediaQuery } from '@mui/material'

interface PageWithSpeedDialProps {
  actions: Action[];
  children: React.ReactNode;
}

const PageWithSpeedDial = ({ actions, children } : PageWithSpeedDialProps) => {
  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'))
  return (
    <>
      {!isMobile && <OptionsBar actions={actions}/>}
      {children}
      {isMobile && <SpeedDialCustom actions={actions} />}
    </>
  )
}

export default PageWithSpeedDial