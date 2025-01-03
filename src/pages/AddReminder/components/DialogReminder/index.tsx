
import Dialog from '@mui/material/Dialog'
import { Button, Typography } from '@mui/material'
import { DateCalendar } from '@mui/x-date-pickers'
import { Contact, Reminder } from '@/types/Contact'
import { useEffect, useState } from 'react'
import { Dayjs } from 'dayjs'
import dayjs from 'dayjs'

interface SimpleDialogProps {
  open: boolean
  selectedValue: Contact
  onClose: () => void,
  addReminder: (reminder: Reminder) => void
}
export default function SimpleDialog(props: SimpleDialogProps) {
  const { onClose, open, selectedValue, addReminder } = props
  const [value, setValue] = useState<Dayjs>(dayjs())
  const handleClose = () => {
    onClose()
  }
useEffect(() => {
  value && console.log(value.format('DD/MM/YYYY'))
}, [value])

  const handleClick = () => {
    // onClose()
    const reminder : Reminder = {
      name: selectedValue?.name,
      phone: selectedValue?.phone,
      fecha: value.format('DD/MM/YYYY')
    }
    addReminder(reminder)
  }

  return (
    <Dialog onClose={handleClose} open={open}>
      <Typography>{selectedValue?.name || 'nombre'}</Typography>
      <Typography>{selectedValue?.phone || 'telefono'}</Typography>
      <Typography>{value && value.format('DD/MM/YYYY')}</Typography>
      <DateCalendar
          disablePast
          value={value} onChange={(newValue) => setValue(newValue)}
      />
      <Button
        onClick={handleClick}
      >
        Aceptar
      </Button>
    </Dialog>
  )
}

