import { Stack } from '@mui/material'
import { Contact } from '@/types/Contact'
import ContactCard from './ContactCard'

interface ContactListProps {
    contacts: Contact[],
    onClickContact: (contact : Contact) => void
}

const ContactList = ({ contacts, onClickContact }: ContactListProps) => (
  <Stack component={'ul'} p={0} spacing={1.5}>
    {contacts.map((contact, i) => (
      <ContactCard key={i} {...contact} handleClick={() => onClickContact(contact)} />
    ))}
  </Stack>
)

export default ContactList