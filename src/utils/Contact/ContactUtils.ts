import { Contact } from '@/types/Contact'

const ContactUtils = {
    isContactsEmpty(contacts: Contact[]): boolean {
      return contacts.length === 0
    },
    isContactEmpty({ name }: Contact): boolean {
      return name.trim() === ''
    },
    getContactEmpty(): Contact {
      return {
        name: '',
        phone: ''
      }
    }
  }

export default ContactUtils