import { useReminderStore } from '@/store'
import { useNavigate } from 'react-router-dom'
import ROUTES from '@/constants/routes'
import { Delete, Add } from '@mui/icons-material'

export const useReminderActions = () => {
  const clearReminder = useReminderStore((state) => state.clearReminder)
  const navigate = useNavigate()

  const actions = [
    { icon: Delete, name: 'Borrar todos', handleClick: () => clearReminder() },
    { icon: Add, name: 'Añadir', handleClick: () => navigate(ROUTES.CONTACT_LIST) },
  ]

  return actions
}