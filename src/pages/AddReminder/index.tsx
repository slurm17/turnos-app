import { useEffect, useState } from 'react'
import SearchBar from './components/SearchBar'
import SimpleDialogDemo from './components/DialogReminder'
import { Contact } from '@/types/Contact'
import { useContactStore } from '@/store/contactStore'
import { useShallow } from 'zustand/shallow'
// const data: Contact[] = [
//     { name: 'Sivana Del el Canal', phone: '3434486607' },
//     { name: 'Juan Pablo Pérez Lorca', phone: '3434486607' },
//     { name: 'María Soledad de las Nieves', phone: '3434486607' },
//     { name: 'Pepe Mantel de las Acacias', phone: '3434486607' },
//     { name: 'Sofía Mesa Sanchez Arriondo', phone: '3434486607' }
//   ]
const AddReminder = () => {
  const { contacts, addReminder } = useContactStore(useShallow((state) => ({
    contacts: state.contacts,
    addReminder: state.addReminder
  })))
  const [contact, setContact] = useState<Contact>({
    name: '',
    phone: ''
  })
  const [open, setOpen] = useState(false)
  const handleClickOpen = () => setOpen(false)
  const handleClose = () => setOpen(false)
  useEffect(() => {
    console.log('Buscando:', contact)
    contact && handleClickOpen()
  }, [contact])
  
  return (
    <>
      <div>AddReminder</div>
      <SearchBar contacts={contacts} setContact={setContact} contact={contact} />
      <SimpleDialogDemo
        selectedValue={contact}
        addReminder={addReminder}
        open={open}
        onClose={handleClose}
      />
    </>
    
  )
}

export default AddReminder