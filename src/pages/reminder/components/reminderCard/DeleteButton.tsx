import { Typography } from '@mui/material'
import { useState } from 'react'

import { AcceptCancelButtons } from '@/components'
import OnDeleteIconButton from '@/components/buttons/OnDeleteIconButton'
import { DialogCustom } from '@/styles/DailogCustom'

interface DeleteButtonProps {
    onDelete: () => void;
}
const DeleteButton = ({ onDelete }: DeleteButtonProps) => {
  const [open, setOpen] = useState(false)
  const handleClickIconButton = () => {
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
      <OnDeleteIconButton handleClickIconButton={handleClickIconButton}/>
      <DialogCustom open={open} onClose={onCancel}>
        <Typography align='center'>¿Estás seguro de eliminar este recordatorio?</Typography>
        <AcceptCancelButtons onCancel={onCancel} onAccept={onAccept}/>
      </DialogCustom>
    </>
  )
}

export default DeleteButton