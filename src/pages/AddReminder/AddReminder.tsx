import { useLocation, useNavigate } from 'react-router-dom'
import { Button, Stack, Typography } from '@mui/material'
import { DateCalendar } from '@mui/x-date-pickers'
import { Contact } from '@/types/Contact'
import { useState } from 'react'
import { Dayjs } from 'dayjs'
import dayjs from 'dayjs'
import ROUTES from '@/constants/routes'
import { useReminderStore } from '@/store'
import { DateUtils } from '@/utils'
const AddReminder = () => { 
  const [date, setDate] = useState<Dayjs>(dayjs())
  const navigate = useNavigate()
  const location = useLocation()
  const { contact: { name, phone } } = location.state as { contact: Contact } 
  const addReminder = useReminderStore(state => state.addReminder)
  const handleAceptar = () => {
    addReminder({ name, phone, date: DateUtils.formatDDMMAAAA(date) })
    navigate(ROUTES.REMINDER)
  }
  const handleCancelar = () => {
    navigate(ROUTES.CONTACT_LIST)
  }
  const handleChangeCalendar = (newValue : Dayjs) => {
    setDate(newValue)
  }
  return (
    <div>
      <Typography>{name || 'NOMBRE'}</Typography>
      <Typography>{phone || 'TELEFONO'}</Typography>
      <DateCalendar
        disablePast
        value={date} 
        onChange={handleChangeCalendar}
      />
      <Typography>Fecha: {DateUtils.formatDDMMAAAA(date)}</Typography>
      <Stack
        spacing={5}
        direction="row"
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
          mt: 4
        }}
      >
        <Button
          variant='outlined'
          onClick={handleCancelar}
          >
          {'Cancelar'}
        </Button>
        <Button
          variant='contained'
          onClick={handleAceptar}
          >
          {'Aceptar'}
        </Button>
      </Stack>
    </div>
  )
}

export default AddReminder