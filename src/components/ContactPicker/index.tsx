import React from 'react'

interface Contact {
  name?: string[];
  email?: string[];
  tel?: string[];
  address?: string[];
  icon?: string[];
}

const ContactPicker: React.FC = () => {
  const pickContact = async (): Promise<void> => {
    if ('contacts' in navigator && 'ContactsManager' in window) {
      try {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const contacts: Contact[] = await (navigator.contacts as any).select(
          ['name', 'email', 'tel'],
          { multiple: false }
        )
        alert(contacts)
        // Procesa los contactos seleccionados según tus necesidades
      } catch (error) {
        console.error('Error al seleccionar contacto:', error)
      }
    } else {
      console.warn('La Contact Picker API no está disponible en este navegador.')
    }
  }

  return (
    <button onClick={pickContact}>
      Seleccionar Contacto
    </button>
  )
}

export default ContactPicker
