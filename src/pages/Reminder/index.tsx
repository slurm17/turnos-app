import { Alert } from '@mui/material'
import ReminderList from './components/ReminderList'
import { useReminderActions } from '@/hooks/Reminder/useReminderActions'
import { SpeedDialCustom } from '@/components/utilities'
import { useReminderStore } from '@/store'
const Reminder = () => {
  const actions = useReminderActions()
  const reminder = useReminderStore((state) => state.reminder)
  const reminderAlert = <Alert severity="info">No hay recordatorios agendados</Alert>
  const reminderList = <ReminderList reminder={reminder}/>
  return (
    <>
        {reminder.length ? reminderList : reminderAlert}
        <SpeedDialCustom actions={actions}/>
    </>
  )
}

export default Reminder