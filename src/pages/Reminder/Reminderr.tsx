import { Alert, Tab, Tabs } from '@mui/material'
import { useReminderActions } from '@/hooks/useReminderActions'
import { useReminderStore } from '@/store'
import ReminderList from './ReminderList/ReminderList'
import { PageWithOptions } from '@/components'
import { useState } from 'react'
import { DateUtils } from '@/utils'

const Reminder = () => {
  const actions = useReminderActions()
  const reminder = useReminderStore((state) => state.reminder)
  const isReminderEmpty = !reminder.length
  const [activeTab, setActiveTab] = useState(0) // 0 para activos, 1 para vencidos

  // Filtrar recordatorios
  const activeReminders = reminder.filter(rem => !DateUtils.isExpired(rem.date))
  const expiredReminders = reminder.filter(rem => DateUtils.isExpired(rem.date))

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue)
  }

  return (
    <PageWithOptions actions={actions}>
      {isReminderEmpty ? (
        <Alert severity="info">No hay recordatorios agendados</Alert>
      ) : (
        <>
          <Tabs value={activeTab} onChange={handleTabChange} aria-label="Reminder tabs">
            <Tab label={`Activos (${activeReminders.length})`} />
            <Tab label={`Vencidos (${expiredReminders.length})`} />
          </Tabs>
          
          {activeTab === 0 ? (
            activeReminders.length > 0 ? (
              <ReminderList reminder={activeReminders} />
            ) : (
              <Alert severity="info">No hay recordatorios activos</Alert>
            )
          ) : (
            expiredReminders.length > 0 ? (
              <ReminderList reminder={expiredReminders} />
            ) : (
              <Alert severity="info">No hay recordatorios vencidos</Alert>
            )
          )}
        </>
      )}
    </PageWithOptions>
  )
}

export default Reminder