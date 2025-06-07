import { ContactData } from '@/types/ContactData'

const ContactUtils = {
  isContactsEmpty(contacts: ContactData[]): boolean {
    return contacts.length === 0
  },
  isContactEmpty({ name }: ContactData): boolean {
    return name.trim() === ''
  },
  getContactEmpty(): ContactData {
    return {
      name: '',
      phone: ''
    }
  }
}

export default ContactUtils