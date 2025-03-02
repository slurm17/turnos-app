import { Alert, Stack } from '@mui/material'
import { useReminderActions } from '@/hooks/useReminderActions'
import { useReminderStore } from '@/store'
import ReminderCard from './components/ReminderCard'
import { PageWithSpeedDial } from '@/components'
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
        <Stack component={'ul'} p={0} spacing={1.5}>
          {reminder.map((reminder, i) => 
            (<ReminderCard key={i} {...reminder} />)
          )}
        </Stack>
      }
		</PageWithSpeedDial>
	)
}

export default Reminder