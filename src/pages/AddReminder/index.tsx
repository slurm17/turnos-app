import { useState } from 'react'
import SearchBar from './components/SearchBar'
import SimpleDialogDemo from './components/DialogReminder'
import { Contact } from '@/types/Contact'
import { useContactStore } from '@/store/contactStore'
import { useShallow } from 'zustand/shallow'
const emptyContact: Contact = {
  name: '',
  phone: '',
}
// const contacts: Contact[] = [
//     { name: 'Sivana Del el Canal', phone: '3434486607' },
//     { name: 'Juan Pablo Pérez Lorca', phone: '3434486608' },
//     { name: 'María Soledad de las Nieves', phone: '3434486609' },
//     { name: 'Pepe Mantel de las Acacias', phone: '3434486600' },
//     { name: 'Sofía Mesa Sanchez Arriondo', phone: '3434486605' }
//   ]
const isContactEmpty = (contact: Contact): boolean => {
  return contact.name.trim() === '' && contact.phone.trim() === ''
}
// const isObjectEmpty = (obj: Record<string, any>): boolean => {
//   return Object.values(obj).every(
//     (value) =>
//       value === null ||
//       value === undefined ||
//       (typeof value === 'string' && value.trim() === '') ||
//       (Array.isArray(value) && value.length === 0) ||
//       (typeof value === 'object' && !Array.isArray(value) && isObjectEmpty(value))
//   )
// }
const AddReminder = () => {
  const { contacts, addReminder } = useContactStore(useShallow((state) => ({
    contacts: state.contacts,
    addReminder: state.addReminder
  })))
  const [contact, setContact] = useState<Contact>(emptyContact)
  
  return (
    <>
      {/* <Box>AddReminder</Box> */}
      <SearchBar contacts={contacts} setContact={setContact} contact={contact} />
      {!isContactEmpty(contact) &&
        <SimpleDialogDemo
          selectedValue={contact}
          addReminder={addReminder}
        />
      }
    </>
    
  )
}

export default AddReminder