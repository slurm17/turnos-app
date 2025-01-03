import { useContactStore } from '@/store/contactStore'

const ContactPicker = () => {
  const addContact = useContactStore((state) => state.addContact)
  const pickContact = async (): Promise<void> => {
    if ('contacts' in navigator && 'ContactsManager' in window) {
      try {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const contacts = await (navigator.contacts as any).select(
          ['name', 'tel'],
          { multiple: true }
        )
        addContact({ name: contacts[0].name, phone: contacts[0].tel })
        // Procesa los contactos seleccionados según tus necesidades
      } catch (error) {
        console.error('Error al seleccionar contacto:', error)
      }
    } else {
      console.warn('La Contact Picker API no está disponible en este navegador.')
      alert('Necesitas instalar la aplicación en tu celular. Si ya está instalada, tu navegador no es compatible con esta función.')
    }
  }

  return (
    <button onClick={pickContact}>
      Seleccionar Contacto
    </button>
  )
}

export default ContactPicker
