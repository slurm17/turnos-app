import ContactCard from '../contactCard/ContactCard'

import StackList from '@/styles/StackList'
import { ContactData } from '@/types/ContactData'


interface ContactListProps {
    contacts: ContactData[],
    onClickContact: (contact : ContactData) => void
}

const ContactList = ({ contacts, onClickContact }: ContactListProps) => (
  <StackList>
    {contacts.map((contact, i) => (
      <ContactCard key={i} {...contact} handleClick={() => onClickContact(contact)} />
    ))}
  </StackList>
)

export default ContactList