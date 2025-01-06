
import { Button, Grid2, Typography } from '@mui/material'
import { DateCalendar } from '@mui/x-date-pickers'
import { Contact, Reminder } from '@/types/Contact'
import { useState } from 'react'
import { Dayjs } from 'dayjs'
import dayjs from 'dayjs'
import { useNavigate } from 'react-router-dom'

interface SimpleDialogProps {
  selectedValue: Contact | null
  addReminder: (reminder: Reminder) => void
}
export default function SimpleDialog(props: SimpleDialogProps) {
  const { selectedValue, addReminder } = props
  const [value, setValue] = useState<Dayjs>(dayjs())
  const navigate = useNavigate()
  const handleClickAceptar = () => {
    selectedValue && addReminder({
        name: selectedValue.name,
        phone: selectedValue.phone,
        fecha: value.format('DD/MM/YYYY')
      })
      navigate('/')
  }

  return (
    <>
      <DateCalendar
        disablePast
        value={value} 
        onChange={(newValue) => setValue(newValue)}
      />
      <Typography>{selectedValue?.phone}</Typography>
      <Typography>Fecha: {value.format('DD/MM/YYYY')}</Typography>
      <Grid2 container columnSpacing={2} mt={2}>
        <Grid2 size={6}>
          <Button
            variant='contained'
            // onClick={onClose}
            >
            {'Cancelar'}
          </Button>
        </Grid2>
        <Grid2 size={6}>
          <Button
            variant='contained'
            onClick={handleClickAceptar}
            >
            {'Aceptar'}
          </Button>
        </Grid2>
      </Grid2>
    </>
  )
}

