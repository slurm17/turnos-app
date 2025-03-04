import { useContactStore } from '@/store'
import { useNavigate } from 'react-router-dom'
import * as ROUTES from '@/constants/routes'
import { PersonAddDisabled, PersonAdd } from '@mui/icons-material'
export const useContactActions = () => {
  const clearContacts = useContactStore((state) => state.clearContacts)
  const navigate = useNavigate()
  const actions = [
    { icon: PersonAddDisabled, name: 'Borrar todos', handleClick: () => clearContacts() },
    { icon: PersonAdd, name: 'Añadir', handleClick: () => navigate(ROUTES.CONTACT_ADD) },
  ]

  return actions
}