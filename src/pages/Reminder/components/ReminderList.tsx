import { StackList } from '@/styles/StackList'
import { Reminder } from '@/types/Reminder'
import ReminderCard from './ReminderCard'

interface ReminderListProps {
    reminder: Reminder[]
}

const ReminderList = ({ reminder }: ReminderListProps) => {
  return (
    <StackList>
        {reminder.map((reminder, i) => 
            <ReminderCard key={i} {...reminder} />
        )}
    </StackList>
  )
}

export default ReminderList