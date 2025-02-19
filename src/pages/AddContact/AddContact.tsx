import ContactPicker from '@/pages/AddContact/components/ContactPicker'
import { Stack } from '@mui/material'
import ContactManually from './components/ContactManually'
import ContactFile from './components/ContactFile'
import { useContactStore } from '@/store'

const AddContact = () => {
  const addContact = useContactStore((state) => state.addContact)
  const addContacts = useContactStore((state) => state.addContacts)

  return (
    <Stack p={0} spacing={1.5}>
      <ContactPicker addContact={addContact}/>
      <ContactManually addContact={addContact}/>
      <ContactFile addContacts={addContacts}/>
    </Stack>
  )
}

export default AddContact