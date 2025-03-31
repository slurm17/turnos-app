import { DateCalendar } from '@mui/x-date-pickers'
import { Contact } from '@/types/Contact'
import { Dayjs } from 'dayjs'
import { AcceptCancelButtons, ReminderInfo } from '@/components'
import { DialogCustom } from '@/styles/DailogCustom'

interface ReminderAddModalProps {
  contact: Contact,
  onCancel: () => void,
  onAccept: () => void,
  onDateChange: (newValue: Dayjs) => void,
  selectedDate: Dayjs,
  open: boolean,
}

const ReminderAddModal = ({ 
    contact, 
    onCancel, 
    onAccept, 
    onDateChange,
    selectedDate,
    open
  }:ReminderAddModalProps) => { 
  return (
    <DialogCustom open={open} onClose={onCancel}>
        <DateCalendar
          disablePast
          value={selectedDate} 
          onChange={onDateChange}
        />
        <ReminderInfo name={contact.name} phone={contact.phone} date={selectedDate}/>
        <AcceptCancelButtons onCancel={onCancel} onAccept={onAccept}/>
    </DialogCustom>
  )
}

export default ReminderAddModal