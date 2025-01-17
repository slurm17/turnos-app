import ContactPicker from '@/pages/AddContact/components/ContactPicker'
import { useContactStore } from '@/store/contactStore'
import { Contact } from '@/types/Contact'
import { Button, TextField } from '@mui/material'
import { useState } from 'react'
import { handleFileUpload } from './components/ReadFile'
import { useReminderStore } from '@/store/reminderStore'

const AddContact = () => {
  const clearContacts = useContactStore((state) => state.clearContacts)
  const addContact = useContactStore((state) => state.addContact)
  const addContacts = useContactStore((state) => state.addContacts)
  const clearReminder = useReminderStore((state) => state.clearReminder)

  const [datos, setDatos] = useState<Contact>({
    name: '',
    phone: ''
  })
  const handleChange = ({ name, value } : {name: string, value: string}) => {
    setDatos({ ...datos, [name]: value })
  }

  return (
    <div>
      <Button onClick={clearContacts}>
        borrar contactos
      </Button>
      <Button onClick={clearReminder}>
        borrar recordatorios
      </Button>
      <ContactPicker/>
      <TextField 
        name='name'
        value={datos.name} 
        type='text' 
        label='Nombre' 
        onChange={({ target: { name, value } }) => handleChange({ name, value })}
      />
      <TextField 
        name='phone'
        value={datos.phone} 
        type='text' 
        label='Telefono'
        onChange={({ target: { name, value } }) => handleChange({ name, value })}
      />
      <Button onClick={()=> addContact({ name: datos.name, phone: datos.phone })}>
        Agregar contacto
      </Button>
      <input type='file' 
      onChange={(e) => handleFileUpload(e,addContacts)}
      />
    </div>
  )
}

export default AddContact