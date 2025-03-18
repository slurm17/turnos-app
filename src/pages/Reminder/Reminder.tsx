import { Alert } from '@mui/material'
import { useReminderActions } from '@/hooks/useReminderActions'
import { useReminderStore } from '@/store'
import ReminderList from './components/ReminderList'
import { PageWithOptions } from '@/components'
const Reminder = () => {
	const actions = useReminderActions()
	const reminder = useReminderStore((state) => state.reminder)
	const isReminderEmpty = !reminder.length
	return (
		<PageWithOptions actions={actions}>
		{isReminderEmpty && 
			<Alert severity="info">No hay recordatorios agendados</Alert>
		}
		{!isReminderEmpty && 
			<ReminderList reminder={reminder}/>
		}
		</PageWithOptions>
	)
}

export default Reminder