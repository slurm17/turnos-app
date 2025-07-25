import { useState } from 'react'
import { Alert } from '@mui/material'

import { ContactList } from './components'
import { useContact, useContactList, useModalCalendar } from './hooks'
import InfoEmptyContacts from './components/contactMessageInfo/InfoEmptyContacts'

import { ContactData } from '@/types/ContactData'
import { ContactUtils } from '@/utils'
import { ModalCalendar, PageWithOptions } from '@/components'


const Contact = () => {
  const [contactSelected, setContactSelected] = useState<ContactData>(ContactUtils.getContactEmpty())
  const [openModal, setOpenModal] = useState(false)
  const { contacts, actions, isContactsEmpty } = useContact()
  const { onAccept, onCancel } = useModalCalendar({ contact: contactSelected, setOpen: setOpenModal })
  const { onClickContact } = useContactList({ setOpen: setOpenModal, setContact: setContactSelected })

  return (
    <PageWithOptions actions={actions}>
      {isContactsEmpty && 
      <InfoEmptyContacts />
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