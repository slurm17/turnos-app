import ROUTES from "@/constants/routes"
import { useReminderStore } from "@/store"
import { ContactData } from "@/types/ContactData"
import { Dayjs } from "dayjs"
import { useNavigate } from "react-router-dom"

interface Props {
    contact: ContactData,
    setOpen: (open: boolean) => void
}
const useModalCalendar = ({contact, setOpen}: Props) => {
    const navigate = useNavigate()
    const addReminder = useReminderStore(state => state.addReminder)
    const onAccept = (date : Dayjs) => {
        addReminder({ 
        name: contact.name, 
        phone: contact.phone, 
        date,
        })
        navigate(ROUTES.REMINDER)
    }
    const onCancel = () => setOpen(false)
  return {onAccept, onCancel}
}

export default useModalCalendar
