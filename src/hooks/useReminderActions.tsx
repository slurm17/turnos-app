import { useReminderStore } from '@/store'
import { useNavigate } from 'react-router-dom'
import * as ROUTES from '@/constants/routes'
import { Save, FileCopy } from '@mui/icons-material'

export const useReminderActions = () => {
  const clearReminder = useReminderStore((state) => state.clearReminder)
  const navigate = useNavigate()

  const actions = [
    { icon: Save, name: 'Borrar todos', onClick: () => clearReminder() },
    { icon: FileCopy, name: 'Añadir', onClick: () => navigate(ROUTES.CONTACT_LIST) },
  ]

  return actions
}