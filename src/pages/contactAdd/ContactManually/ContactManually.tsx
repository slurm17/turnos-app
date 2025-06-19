import { useState } from 'react'

import ContactManuallyModal from './ContactManuallyModal'

import { ButtonShadow } from '@/styles/Shadow'

const ContactManually = () => {
  const [open, setOpen] = useState<boolean>(false)
  const handleClose = () => {
    setOpen(false)
  }
  const handleOpen = () => {
    setOpen(true)
  }
  
  return (
    <>
      <ContactManuallyModal
        open={open}
        onClose={handleClose}
      />
      <ButtonShadow 
        fullWidth
        onClick={handleOpen}
      >
        Agregar contacto manualmente
      </ButtonShadow>
    </>
  )
}

export default ContactManually