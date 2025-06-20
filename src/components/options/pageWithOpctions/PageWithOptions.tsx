import React from 'react'
import { Theme, useMediaQuery } from '@mui/material'

import OptionsBar from './components/OptionsBar'
import SpeedDialCustom from './components/SpeedDialCustom'

import { ActionData } from '@/types/ActionData'

interface PageWithOptionsProps {
  actions: ActionData[];
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

