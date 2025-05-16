import { Alert, Tab, Tabs } from '@mui/material'
import ReminderList from './components/reminderList/ReminderList'
import { PageWithOptions } from '@/components'
import { useState } from 'react'
import useReminder from './hooks/useReminder'

const Reminder = () => {
	const [activeTab, setActiveTab] = useState(0)
	const { actions, hasReminders, activeRemindersList, expiredRemindersList  } = useReminder()
	const handleTabChange = (_: React.SyntheticEvent, newValue: number) => {
		setActiveTab(newValue)
	}

  return (
	<PageWithOptions actions={actions}>
		{!hasReminders && <Alert severity="info">No hay recordatorios agendados</Alert>}
		{hasReminders && (
				<>
					<Tabs value={activeTab} onChange={handleTabChange} aria-label="Reminder tabs">
						<Tab label={`Activos (${activeRemindersList.length})`} />
						<Tab disabled={expiredRemindersList.length < 1} label={`Vencidos (${expiredRemindersList.length})`} />
					</Tabs>
					{activeTab === 0 && (
						activeRemindersList.length > 0 ? 
							(
								<ReminderList reminder={activeRemindersList} />
							) : 
							(
								<Alert severity="info">No hay recordatorios activos</Alert>
							)
					)}
					{activeTab === 1 && (
						expiredRemindersList.length > 0 && <ReminderList reminder={expiredRemindersList} />
					)}
				</>
			)
		}
	</PageWithOptions>
  )
}

export default Reminder