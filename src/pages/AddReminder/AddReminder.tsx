import { useLocation, useNavigate } from 'react-router-dom'
import { DateCalendar } from '@mui/x-date-pickers'
import { Contact } from '@/types/Contact'
import { useState } from 'react'
import { Dayjs } from 'dayjs'
import dayjs from 'dayjs'
import ROUTES from '@/constants/routes'
import { useReminderStore } from '@/store'
import { AceptCancelButtons, ReminderInfo } from '@/components'
const AddReminder = () => { 
  const [date, setDate] = useState<Dayjs>(dayjs())
  const navigate = useNavigate()
  const location = useLocation()
  const { contact: { name, phone } } = location.state as { contact: Contact } 
  const addReminder = useReminderStore(state => state.addReminder)
  const handleAceptar = () => {
    addReminder({ name, phone, date })
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
      <DateCalendar
        disablePast
        value={date} 
        onChange={handleChangeCalendar}
      />
      <ReminderInfo name={name} phone={phone} date={date}/>
      <AceptCancelButtons handleCancelar={handleCancelar} handleAceptar={handleAceptar}/>
    </div>
  )
}

export default AddReminder