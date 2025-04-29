import { Alert } from '@mui/material'
import ROUTES from '@/constants/routes'
import { useContactStore, useReminderStore } from '@/store'
import { ContactUtils } from '@/utils'
import { useContactActions } from '@/hooks/useContactActions'
import ContactList from './contactList/ContactList'
import { useState } from 'react'
import { Dayjs } from 'dayjs'
import { useNavigate } from 'react-router-dom'
import { ModalCalendar, PageWithOptions } from '@/components'
import { ContactData } from '@/types/ContactData'

const Contact = () => {
  const actions = useContactActions()
  const navigate = useNavigate()
  const addReminder = useReminderStore(state => state.addReminder)
  const contacts  = useContactStore(state => state.contacts)
  const isContactsEmpty = ContactUtils.isContactsEmpty(contacts)
  const [contactSelected, setContactSelected] = useState<ContactData>(ContactUtils.getContactEmpty())
  const [openModal, setOpenModal] = useState(false)
  const onAccept = (date : Dayjs) => {
    addReminder({ 
      name: contactSelected.name, 
      phone: contactSelected.phone, 
      date,
    })
    navigate(ROUTES.REMINDER)
  }
  const onCancel = () => {
    setOpenModal(false)
  }
  const onClickContact = (contact : ContactData) => {
    setContactSelected(contact)
    setOpenModal(true)
  }
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