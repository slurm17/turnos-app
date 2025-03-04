import { Alert } from '@mui/material'
import { useReminderActions } from '@/hooks/useReminderActions'
import { useReminderStore } from '@/store'
import { PageWithSpeedDial } from '@/components'
import ReminderList from './components/ReminderList'
const Reminder = () => {
	const actions = useReminderActions()
	const reminder = useReminderStore((state) => state.reminder)
	const isReminderEmpty = !reminder.length
	return (
		<PageWithSpeedDial actions={actions}>
      {isReminderEmpty && 
        <Alert severity="info">No hay recordatorios agendados</Alert>
      }
      {!isReminderEmpty && 
        <ReminderList reminder={reminder}/>
      }
		</PageWithSpeedDial>
	)
}

export default Reminder