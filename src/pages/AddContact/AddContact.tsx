import ContactPicker from '@/pages/AddContact/components/ContactPicker'
import { Button, Stack } from '@mui/material'
import ContactManually from './components/ContactManually'
import ContactFile from './components/ContactFile'
import { useContactStore } from '@/store'

const AddContact = () => {
  const clearContacts = useContactStore((state) => state.clearContacts)
  const addContact = useContactStore((state) => state.addContact)
  const addContacts = useContactStore((state) => state.addContacts)

  return (
    <Stack p={0} spacing={1.5}>
      <ContactPicker addContact={addContact}/>
      <ContactManually addContact={addContact}/>
      <ContactFile addContacts={addContacts}/>
      <Button onClick={clearContacts}>
        borrar contactos
      </Button>
    </Stack>
  )
}

export default AddContact