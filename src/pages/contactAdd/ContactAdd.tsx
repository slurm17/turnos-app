import ContactManually from './ContactManually/ContactManually'
import ContactFile from './components/ContactFile'
import ContactPicker from './components/ContactPicker'

import { useContactStore } from '@/store'

const ContactAdd = () => {
  const addContact = useContactStore((state) => state.addContact)
  const addContacts = useContactStore((state) => state.addContacts)

  return (
    <>
      <ContactPicker addContact={addContact}/>
      <ContactManually/>
      <ContactFile addContacts={addContacts}/>
    </>
  )
}

export default ContactAdd