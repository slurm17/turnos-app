import { Alert } from '@mui/material'
import ROUTES from '@/constants/routes'
import { useContactStore, useReminderStore } from '@/store'
import { ContactUtils } from '@/utils'
import { useContactActions } from '@/hooks/useContactActions'
import { Contact } from '@/types/Contact'
import ContactList from './contactList/ContactList'
import ReminderAddModal from '@/components/reminders/ReminderAddModal'
import { useState } from 'react'
import { Dayjs } from 'dayjs'
import { useNavigate } from 'react-router-dom'
import dayjs from '@/dayjsConfig'
import { PageWithOptions } from '@/components'

const ListContact = () => {
  const contacts  = useContactStore(state => state.contacts)
  const isContactsEmpty = ContactUtils.isContactsEmpty(contacts)
  const addReminder = useReminderStore(state => state.addReminder)
  const actions = useContactActions()
  const navigate = useNavigate()
  const [openModal, setOpenModal] = useState(false)
  const [contactSelected, setContactSelected] = useState<Contact>(ContactUtils.getContactEmpty())
  const [selectedDate, setSelectedDate] = useState<Dayjs>(dayjs())
  const onClickContact = (contact : Contact) => {
    setContactSelected(contact)
    setOpenModal(true)
  }
  const onAccept = () => {
    addReminder({ 
      name: contactSelected.name, 
      phone: contactSelected.phone, 
      date: selectedDate,
    })
    navigate(ROUTES.REMINDER)
  }
  const onCancel = () => {
    setOpenModal(false)
    setSelectedDate(dayjs())
  }
  const onDateChange = (newDate : Dayjs) => {
    setSelectedDate(newDate)
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
          <ReminderAddModal 
            contact={contactSelected} 
            open={openModal} 
            onCancel={onCancel} 
            onAccept={onAccept}
            onDateChange={onDateChange}
            selectedDate={selectedDate}
          />
        </>
        }
    </PageWithOptions>
  )
}

export default ListContact