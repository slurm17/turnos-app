import { Box } from '@mui/material'
import ReminderCard from './components/ReminderCard'
import { useContactStore } from '@/store/contactStore'

const Home = () => {
  const reminder = useContactStore((state) => state.reminder)
  return (
    <Box sx={{
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
    </Box>
  )
}

export default Home