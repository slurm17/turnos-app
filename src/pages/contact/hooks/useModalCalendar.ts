import { Dayjs } from 'dayjs'

import { useReminderStore } from '@/store'
import { ContactData } from '@/types/ContactData'
import { useAppNavigation } from '@/hooks/navigate/useAppNavigation'

interface Props {
    contact: ContactData,
    setOpen: (open: boolean) => void
}
const useModalCalendar = ({ contact, setOpen }: Props) => {
    const navigate = useAppNavigation()
    const addReminder = useReminderStore(state => state.addReminder)
    const onAccept = (date : Dayjs) => {
        addReminder({ 
        name: contact.name, 
        phone: contact.phone, 
        date,
        })
        navigate.goToReminder()
    }
    const onCancel = () => setOpen(false)
  return { onAccept, onCancel }
}

export default useModalCalendar
