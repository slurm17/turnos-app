import { Alert } from '@mui/material'
import ReminderList from './components/ReminderList'
import { useReminderActions } from '@/hooks/useReminderActions'
import { useReminderStore } from '@/store'
import SpeedDialCustom from '@/components/SpeedDialCustom'
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