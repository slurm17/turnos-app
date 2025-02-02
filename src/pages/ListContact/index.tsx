import { ContactUtils } from '@/types/Contact'
import { useContactStore } from '@/store/contactStore'
import { Alert } from '@mui/material'
import ContactCard from './components/ContactCard'
import { useNavigate } from 'react-router-dom'
import * as ROUTES from '@/constants/routes'
const ListContact = () => {
  const contacts  = useContactStore(state => state.contacts)
  // const addReminder = useReminderStore(state => state.addReminder)
  const navigate = useNavigate()
  // const [contact, setContact] = useState<Contact>(emptyContact)
  if(ContactUtils.isContactsEmpty(contacts))
    return(
      <Alert severity="info">No hay contactos agregados</Alert>
    )

  return (
    <>
      {/* <SearchBar contacts={contacts} setContact={setContact} contact={contact} /> */}
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
      {/* {!ContactUtils.isContactEmpty(contact) &&
        <SimpleDialogDemo
          selectedValue={contact}
          addReminder={addReminder}
        />
      } */}
    </>
  )
}

export default ListContact