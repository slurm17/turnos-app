import { AbsoluteIconButton, AcceptCancelButtons } from '@/components'
import { DialogCustom } from '@/styles/DailogCustom'
import { Typography } from '@mui/material'
import { useState } from 'react'
import HighlightOffIcon from '@mui/icons-material/HighlightOff'

interface DeleteButtonProps {
    onDelete: () => void;
    message: string
}
const DeleteButton = ({ onDelete, message }: DeleteButtonProps) => {
    const [open, setOpen] = useState(false)
    const onClick = () => {
        setOpen(true)   
    }
    const onCancel = () => {
        setOpen(false)
    }
    const onAccept = () => {
        onDelete()
        setOpen(false)
    }
  return (
    <>
        <AbsoluteIconButton 
            onClick={onClick} 
            icon={HighlightOffIcon}
            color='error'
        />
        <DialogCustom open={open} onClose={onCancel}>
            <Typography sx={{ margin: '.7rem' }} align='center'>{message}</Typography>
            <AcceptCancelButtons onCancel={onCancel} onAccept={onAccept}/>
        </DialogCustom>
    </>
  )
}

export default DeleteButton