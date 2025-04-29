import { DateCalendar } from '@mui/x-date-pickers'
import { ContactData } from '@/types/ContactData'
import dayjs, { Dayjs } from 'dayjs'
import { AcceptCancelButtons, ReminderInfo } from '@/components'
import { DialogCustom } from '@/styles/DailogCustom'
import { useState } from 'react'

interface ModalCalendarProps {
  contact: ContactData,
  onCancel: () => void,
  onAccept: ( date : Dayjs) => void,
  open: boolean,
}

const ModalCalendar = ( { contact, ...props } : ModalCalendarProps) => { 
  const [selectedDate, setSelectedDate] = useState<Dayjs>(dayjs())
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