import { List } from '@mui/material'

import ReminderCard from '../reminderCard/ReminderCard'

import { ReminderData } from '@/types/ReminderData'

interface ReminderListProps {
    reminder: ReminderData[]
}

const ReminderList = ({ reminder }: ReminderListProps) => {
  return (
    <List> 
      {reminder.map((reminder, i) => 
        <ReminderCard key={i} {...reminder} />
        )}
    </List>
  )
}

export default ReminderList