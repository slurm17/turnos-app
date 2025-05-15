import { useState } from 'react'
import { ContactData } from '@/types/ContactData'
import { Alert } from '@mui/material'
import { ContactUtils } from '@/utils'
import { ModalCalendar, PageWithOptions } from '@/components'
import { ContactList } from './components'
import { useContact, useContactList, useModalCalendar } from './hooks'

const Contact = () => {
  const [contactSelected, setContactSelected] = useState<ContactData>(ContactUtils.getContactEmpty())
  const [openModal, setOpenModal] = useState(false)
  const {contacts, actions, isContactsEmpty} = useContact()
  const {onAccept, onCancel} = useModalCalendar({contact: contactSelected, setOpen: setOpenModal})
  const {onClickContact} = useContactList({setOpen: setOpenModal, setContact: setContactSelected})

  return (
    <PageWithOptions actions={actions}>
        {isContactsEmpty && 
          <Alert severity="info">{'No hay contactos agregados'}</Alert>
        }
        {!isContactsEmpty &&
        <>
          <Alert severity="info">{'Selecciona un contacto para agregar un recordatorio'}</Alert>
          <ContactList contacts={contacts} onClickContact={onClickContact}/>
          <ModalCalendar 
            contact={contactSelected} 
            open={openModal} 
            onCancel={onCancel} 
            onAccept={onAccept}
          />
        </>
        }
    </PageWithOptions>
  )
}

export default Contact