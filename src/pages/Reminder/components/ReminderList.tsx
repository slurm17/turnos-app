import { Stack } from '@mui/material'
import ReminderCard from './ReminderCard'
import { Reminder } from '@/types/Reminder'

interface ReminderListProps {
    reminder: Reminder[]
}

const ReminderList = ({ reminder }: ReminderListProps) => {
  return (
    <Stack component={'ul'} p={0} spacing={1.5}>
        {reminder.map((reminder, i) => 
          (<ReminderCard key={i} {...reminder} />)
        )}
    </Stack>
  )
}

export default ReminderList