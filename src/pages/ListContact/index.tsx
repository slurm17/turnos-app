import { ContactUtils } from '@/types/Contact'
import { useContactStore } from '@/store/contactStore'
import { Alert, List } from '@mui/material'
import ContactCard from './components/ContactCard'
import { useNavigate } from 'react-router-dom'
import * as ROUTES from '@/constants/routes'
const ListContact = () => {
  const contacts  = useContactStore(state => state.contacts)
  const navigate = useNavigate()
  if(ContactUtils.isContactsEmpty(contacts))
    return(
      <Alert severity="info">No hay contactos agregados</Alert>
    )

  return (
    <List>
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
    </List>
  )
}

export default ListContact