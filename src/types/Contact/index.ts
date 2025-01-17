// type Fecha = `${string}/${string}/${string}`

export interface Contact {
  name: string;
  phone: string;
}

export const emptyContact: Contact = {
  name: '',
  phone: '',
}
export const ContactUtils = {
  isContactsEmpty(contacts: Contact[]): boolean {
    return contacts.length === 0
  },
  isContactEmpty({ name }: Contact): boolean {
    return name.trim() === ''
  }
  
}

