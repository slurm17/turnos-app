import { Alert, List } from '@mui/material'
import ReminderCard from './components/ReminderCard'
import { useReminderStore } from '@/store/reminderStore'

const Reminder = () => {

  const reminder = useReminderStore((state) => state.reminder)
  if(!reminder.length)
    return(
      <Alert severity="info">No hay recordatorios agendados</Alert>
    )

  return (
    <List sx={{
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
      maxWidth: '500px',
      width: '100%',
      margin: 'auto'
    }}>
      {reminder.map((reminder, i) => 
        (<ReminderCard key={i} {...reminder} />)
      )}
    </List>
  )
}

export default Reminder