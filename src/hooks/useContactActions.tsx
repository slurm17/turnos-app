import { useContactStore } from '@/store'
import { useNavigate } from 'react-router-dom'
import * as ROUTES from '@/constants/routes'
import { Save, FileCopy } from '@mui/icons-material'

export const useContactActions = () => {
  const clearContacts = useContactStore((state) => state.clearContacts)
  const navigate = useNavigate()

  const actions = [
    { icon: Save, name: 'Borrar todos', onClick: () => clearContacts() },
    { icon: FileCopy, name: 'Añadir', onClick: () => navigate(ROUTES.CONTACT_ADD) },
  ]

  return actions
}