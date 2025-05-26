import { Delete, Add } from '@mui/icons-material'

import { useAppNavigation } from '../navigate/useAppNavigation'

import { useReminderStore } from '@/store'


export const useReminderActions = () => {
  const clearReminder = useReminderStore((state) => state.clearReminder)
  const navigate = useAppNavigation()

  const actions = [
    { icon: Delete, name: 'Borrar todos', handleClick: clearReminder },
    { icon: Add, name: 'Añadir', handleClick: () => navigate.goToContact },
  ]

  return actions
}