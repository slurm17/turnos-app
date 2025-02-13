import ContactPicker from '@/pages/AddContact/components/ContactPicker'
import { Box, Button } from '@mui/material'
import ContactManually from './components/ContactManually'
import ContactFile from './components/ContactFile'
import { useContactStore } from '@/store'

const AddContact = () => {
  const clearContacts = useContactStore((state) => state.clearContacts)
  const addContact = useContactStore((state) => state.addContact)
  const addContacts = useContactStore((state) => state.addContacts)

  return (
    <Box sx={{
      '& > * ': {
        marginBottom: '10px !important'
      }
    }}>
      <ContactPicker addContact={addContact}/>
      <ContactManually addContact={addContact}/>
      <ContactFile addContacts={addContacts}/>
      <Button onClick={clearContacts}>
        borrar contactos
      </Button>
    </Box>
  )
}

export default AddContact