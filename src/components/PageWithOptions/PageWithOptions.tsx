import React from 'react'
import SpeedDialCustom from './SpeedDialCustom'
import { Action } from '@/types/Action'
import OptionsBar from './OptionsBar'
import { Theme, useMediaQuery } from '@mui/material'

interface PageWithOptionsProps {
  actions: Action[];
  children: React.ReactNode;
}

const PageWithOptions = ({ actions, children } : PageWithOptionsProps) => {
  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'))
  return (
    <>
      {!isMobile && <OptionsBar actions={actions}/>}
      {children}
      {isMobile && <SpeedDialCustom actions={actions} />}
    </>
  )
}

export default PageWithOptions