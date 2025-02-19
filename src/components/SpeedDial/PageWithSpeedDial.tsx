import React from 'react'
import SpeedDialCustom from './SpeedDialCustom'
import { Action } from '@/types/Action'

interface PageWithSpeedDialProps {
  actions: Action[];
  children: React.ReactNode;
}

const PageWithSpeedDial = ({ actions, children } : PageWithSpeedDialProps) => {
  return (
    <>
      {children}
      <SpeedDialCustom actions={actions} />
    </>
  )
}

export default PageWithSpeedDial