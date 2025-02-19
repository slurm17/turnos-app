import { Alert, Stack } from '@mui/material'
import ContactCard from './components/ContactCard'
import { useNavigate } from 'react-router-dom'
import * as ROUTES from '@/constants/routes'
import { useContactStore } from '@/store'
import { ContactUtils } from '@/utils/Contact'
import { useContactActions } from '@/hooks/useContactActions'
import { PageWithSpeedDial } from '@/components'
const ListContact = () => {
  const contacts  = useContactStore(state => state.contacts)
  const navigate = useNavigate()
  const actions = useContactActions()
  const isContactsEmpty = ContactUtils.isContactsEmpty(contacts)

  return (
    <PageWithSpeedDial actions={actions}>
      {isContactsEmpty && 
        <Alert severity="info">No hay contactos agregados</Alert>
      }
      {!isContactsEmpty &&
        <Stack component={'ul'} p={0} spacing={1.5}>
        {
          contacts.map((contact, i) => 
            <ContactCard 
              key={i} 
              name={contact.name} 
              phone={contact.phone}
              onClick={() => navigate(ROUTES.REMINDER_ADD, { state: { contact } })}
              />
            )
        }
        </Stack>
      }
    </PageWithSpeedDial>
  )
}

export default ListContact