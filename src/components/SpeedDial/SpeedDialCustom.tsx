import Backdrop from '@mui/material/Backdrop'
import SpeedDial from '@mui/material/SpeedDial'
import SpeedDialIcon from '@mui/material/SpeedDialIcon'
import SpeedDialAction from '@mui/material/SpeedDialAction'
import { useState } from 'react'
import { Action } from '@/types/Action'

interface SpeedDialCustomProps {
    actions : Action[]
}
export default function SpeedDialCustom({ actions } : SpeedDialCustomProps) {
    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)
    return (
        <>
            <Backdrop open={open} />
            <SpeedDial
                ariaLabel="SpeedDial tooltip example"
                sx={{ position: 'fixed', bottom: 80, right: 25 }}
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
