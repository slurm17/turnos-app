import { List } from '@mui/material'
import ReminderCard from '../ReminderCard'
import { Reminder } from '@/types/Reminder'

interface ReminderListProps {
    reminder: Reminder[]
}

const ReminderList = ({ reminder }: ReminderListProps) => {
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

export default ReminderList