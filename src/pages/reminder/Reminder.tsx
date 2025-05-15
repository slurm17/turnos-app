import { Alert, Tab, Tabs } from '@mui/material'
import { useReminderActions } from '@/hooks/useReminderActions'
import { useReminderStore } from '@/store'
import ReminderList from './reminderList/ReminderList'
import { PageWithOptions } from '@/components'
import { useSeparateReminders } from './hooks/useSeparateReminders'
import { useState } from 'react'

const Reminder = () => {
	const [activeTab, setActiveTab] = useState(0)
	const actions = useReminderActions()
	const reminder = useReminderStore((state) => state.reminder)
	const { activeReminders, expiredReminders } = useSeparateReminders({reminder})
	const isReminderEmpty = !reminder.length
	const handleTabChange = (_: React.SyntheticEvent, newValue: number) => {
		setActiveTab(newValue)
	}

  return (
	<PageWithOptions actions={actions}>
		{isReminderEmpty && <Alert severity="info">No hay recordatorios agendados</Alert>}
		{!isReminderEmpty && (
				<>
					<Tabs value={activeTab} onChange={handleTabChange} aria-label="Reminder tabs">
						<Tab label={`Activos (${activeReminders.length})`} />
						<Tab disabled={expiredReminders.length < 1} label={`Vencidos (${expiredReminders.length})`} />
					</Tabs>
					{activeTab === 0 && (
						activeReminders.length > 0 ? 
							(
								<ReminderList reminder={activeReminders} />
							) : 
							(
								<Alert severity="info">No hay recordatorios activos</Alert>
							)
					)}
					{activeTab === 1 && (
						expiredReminders.length > 0 && <ReminderList reminder={expiredReminders} />
					)}
				</>
			)
		}
	</PageWithOptions>
  )
}

export default Reminder