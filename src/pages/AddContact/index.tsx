import ContactPicker from '@/pages/AddContact/components/ContactPicker'
import { useContactStore } from '@/store/contactStore'
import { Button } from '@mui/material'
import { useReminderStore } from '@/store/reminderStore'
import ContactManually from './components/ContactManually'
import ContactFile from './components/ContactFile'

const AddContact = () => {
  const clearContacts = useContactStore((state) => state.clearContacts)
  const addContact = useContactStore((state) => state.addContact)
  const addContacts = useContactStore((state) => state.addContacts)
  const clearReminder = useReminderStore((state) => state.clearReminder)

  return (
    <>
      <Button onClick={clearContacts}>
        borrar contactos
      </Button>
      <Button onClick={clearReminder}>
        borrar recordatorios
      </Button>
      <ContactPicker addContact={addContact}/>
      <ContactManually addContact={addContact}/>
      <ContactFile addContacts={addContacts}/>
    </>
  )
}

export default AddContact