import { Contact } from '@/types/Contact'
import ContactCard from './ContactCard'
import { StackList } from '@/styles/StackList'

interface ContactListProps {
    contacts: Contact[],
    onClickContact: (contact : Contact) => void
}

const ContactList = ({ contacts, onClickContact }: ContactListProps) => (
  <StackList>
    {contacts.map((contact, i) => (
      <ContactCard key={i} {...contact} handleClick={() => onClickContact(contact)} />
    ))}
  </StackList>
)

export default ContactList