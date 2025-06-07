import { DateCalendar } from '@mui/x-date-pickers'
import dayjs, { Dayjs } from 'dayjs'
import { useState } from 'react'

import { ContactData } from '@/types/ContactData'
import { AcceptCancelButtons, ReminderInfo } from '@/components'
import { DialogCustom } from '@/styles/DailogCustom'


interface ModalCalendarProps {
  contact: ContactData,
  onCancel: () => void,
  onAccept: ( date : Dayjs) => void,
  open: boolean,
  // Útil para testear o establecer una fecha por defecto.
  initialDate?: Dayjs
}

const ModalCalendar = ( { contact, ...props } : ModalCalendarProps) => { 
  const [selectedDate, setSelectedDate] = useState<Dayjs>(props?.initialDate ?? dayjs())
  const onDateChange = (newDate : Dayjs) => {
    setSelectedDate(newDate)
  }
  return (
    <DialogCustom open={props.open} onClose={props.onCancel}>
      <DateCalendar
        disablePast
        value={selectedDate} 
        onChange={onDateChange}
        />
      <ReminderInfo name={contact.name} phone={contact.phone} date={selectedDate}/>
      <AcceptCancelButtons onCancel={props.onCancel} onAccept={() => props.onAccept(selectedDate)}/>
    </DialogCustom>
  )
}

export default ModalCalendar