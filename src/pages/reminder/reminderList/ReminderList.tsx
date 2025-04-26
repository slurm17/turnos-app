import StackList from '@/styles/StackList'
import { ReminderData } from '@/types/ReminderData'
import ReminderCard from '../reminderCard/ReminderCard'

interface ReminderListProps {
    reminder: ReminderData[]
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