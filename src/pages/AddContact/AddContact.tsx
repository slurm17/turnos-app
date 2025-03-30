import ContactPicker from '@/pages/AddContact/components/ContactPicker'
import ContactManually from './components/ContactManually'
import ContactFile from './components/ContactFile'
import { useContactStore } from '@/store'

const AddContact = () => {
  const addContact = useContactStore((state) => state.addContact)
  const addContacts = useContactStore((state) => state.addContacts)

  return (
    <>
      <ContactPicker addContact={addContact}/>
      <ContactManually addContact={addContact}/>
      <ContactFile addContacts={addContacts}/>
    </>
  )
}

export default AddContact