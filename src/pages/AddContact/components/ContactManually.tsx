import { ButtonShadow } from '@/styles/Shadow'
import { Contact } from '@/types/Contact'
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material'
import { useState } from 'react'
interface ContactManuallyProps {
  addContact: ({ name, phone }: {name: string, phone: string}) => void
}

const ContactManually = ({ addContact } : ContactManuallyProps) => {
  const [open, setOpen] = useState<boolean>(false)
  const [datos, setDatos] = useState<Contact>({
    name: '',
    phone: ''
  })
  const handleClose = () => {
    setOpen(false)
  }
  const handleChange = ({ name, value } : {name: string, value: string}) => {
    setDatos({ ...datos, [name]: value })
  }
  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault()
            addContact({ phone: datos.phone, name: datos.name })
            handleClose()
          },
        }}
      >
        <DialogTitle>Agregar contacto</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Ingrese un número de teléfono válido para poder mandar mensajes a través de Whatsapp.
          </DialogContentText>
          <TextField 
            margin="dense"
            variant="standard"
            autoFocus
            required
            name='name'
            fullWidth
            value={datos.name} 
            type='text' 
            label='Nombre' 
            onChange={({ target: { name, value } }) => handleChange({ name, value })}
          />
          <TextField 
            margin="dense"
            required
            variant="standard"
            name='phone'
            fullWidth
            value={datos.phone} 
            type='number'
            label='Teléfono'
            onChange={({ target: { name, value } }) => handleChange({ name, value })}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button type="submit">Aceptar</Button>
        </DialogActions>
      </Dialog>
      <ButtonShadow 
        fullWidth
        onClick={()=>setOpen(true)}
      >
        Agregar contacto manualmente
      </ButtonShadow>
    </>
  )
}

export default ContactManually