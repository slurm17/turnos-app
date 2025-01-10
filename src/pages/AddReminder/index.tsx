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
const isContactEmpty = ({ name }: Contact): boolean => {
  return name.trim() === ''
}

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
      {/* {contacts.map(c=>{
        return(
          <ul>
            <li>
            {JSON.stringify(c)}
            </li>
          </ul>
        )
      })} */}
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