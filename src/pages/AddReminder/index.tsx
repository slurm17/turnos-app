import { useLocation, useNavigate } from 'react-router-dom'
import { Button, Grid2, Typography } from '@mui/material'
import { DateCalendar } from '@mui/x-date-pickers'
import { Contact } from '@/types/Contact'
import { useState } from 'react'
import { Dayjs } from 'dayjs'
import dayjs from 'dayjs'
import * as ROUTES from '@/constants/routes'
import { useReminderStore } from '@/store/reminderStore'
const AddReminder = () => { 
  const [date, setDate] = useState<Dayjs>(dayjs())
  const location = useLocation()
  const addReminder = useReminderStore(state => state.addReminder)
  const navigate = useNavigate()
  const { contact: { name, phone } } = location.state as { contact: Contact } 
  const handleClickAceptar = () => {
    addReminder({ name, phone, fecha: date })
    navigate(ROUTES.REMINDER)
  }
  return (
    <div>
        <Typography>Nombre: {name}</Typography>
        <Typography>Teléfono: {phone}</Typography>
        <DateCalendar
        disablePast
        value={date} 
        onChange={(newValue) => setDate(newValue)}
      />
      <Typography>Fecha: {date.format('DD/MM/YYYY')}</Typography>
      <Grid2 container columnSpacing={2} mt={2}>
        <Grid2 size={6}>
          <Button
            variant='outlined'
            onClick={()=>navigate(ROUTES.CONTACT_LIST)}
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
    </div>
  )
}

export default AddReminder