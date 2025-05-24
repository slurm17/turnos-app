import React from 'react'
import SpeedDialCustom from './SpeedDialCustom'
import { ActionData } from '@/types/ActionData'
import OptionsBar from './OptionsBar'
import { Theme, useMediaQuery } from '@mui/material'
import { useIsPwaInstalled } from '@/hooks/useIsPwaInstalled'

interface PageWithOptionsProps {
  actions: ActionData[];
  children: React.ReactNode;
}

const PageWithOptions = ({ actions, children } : PageWithOptionsProps) => {
  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'))
  const installed = useIsPwaInstalled()
  return (
    <>
      {!isMobile && <OptionsBar actions={actions}/>}
      {children}
      {isMobile && installed && <SpeedDialCustom actions={actions} />}
    </>
  )
}

export default PageWithOptions

