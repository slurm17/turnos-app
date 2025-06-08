import Backdrop from '@mui/material/Backdrop'
import SpeedDial from '@mui/material/SpeedDial'
import SpeedDialIcon from '@mui/material/SpeedDialIcon'
import SpeedDialAction from '@mui/material/SpeedDialAction'
import { useState } from 'react'

import { ActionData } from '@/types/ActionData'
import { useIsPwaInstalled } from '@/hooks/useIsPwaInstalled'

interface SpeedDialCustomProps {
    actions : ActionData[]
}
export default function SpeedDialCustom({ actions } : SpeedDialCustomProps) {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const isPwaInstalled = useIsPwaInstalled()
  
  return (
    <>
      <Backdrop open={open} />
      <SpeedDial
        ariaLabel="SpeedDial tooltip example"
        sx={{ 
          position: 'fixed', 
          bottom: isPwaInstalled ? 80 : 25, 
          right: 25 
        }}
        icon={<SpeedDialIcon />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
            >
        {actions.map(({ name, icon: Icon, handleClick }) => (
          <SpeedDialAction
            key={name}
            icon={<Icon/>}
            tooltipTitle={name}
            tooltipOpen
            onClick={()=>{
                        handleClick() 
                        handleClose()
                    }}
                />
                ))}
      </SpeedDial>
    </>
  )
}
