import { PersonAddDisabled, PersonAdd } from '@mui/icons-material'

import { useAppNavigation } from '../navigate/useAppNavigation'

import { useContactStore } from '@/store'

export const useContactActions = () => {
  const clearContacts = useContactStore((state) => state.clearContacts)
  const navigate = useAppNavigation()
  const actions = [
    { icon: PersonAddDisabled, name: 'Borrar todos', handleClick: clearContacts },
    { icon: PersonAdd, name: 'Añadir', handleClick: navigate.goToContactAdd },
  ]

  return actions
}