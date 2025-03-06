import { Alert } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import * as ROUTES from '@/constants/routes'
import { useContactStore } from '@/store'
import { ContactUtils } from '@/utils'
import { useContactActions } from '@/hooks/useContactActions'
import { PageWithOptions } from '@/components'
import { Contact } from '@/types/Contact'
import ContactList from './components/ContactList'
const ListContact = () => {
  const contacts  = useContactStore(state => state.contacts)
  const navigate = useNavigate()
  const actions = useContactActions()
  const isContactsEmpty = ContactUtils.isContactsEmpty(contacts)
  const onClickContact = (contact : Contact) => {
    navigate(ROUTES.REMINDER_ADD, { state: { contact } })
  }
  return (
    <PageWithOptions actions={actions}>
      {isContactsEmpty && 
        <Alert severity="info">{'No hay contactos agregados'}</Alert>
      }
      {!isContactsEmpty &&
        <ContactList contacts={contacts} onClickContact={onClickContact}/>
      }
    </PageWithOptions>
  )
}

export default ListContact