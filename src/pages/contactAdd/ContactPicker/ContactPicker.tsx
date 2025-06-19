import { useAppNavigation } from '@/hooks/navigate/useAppNavigation'
import { ButtonShadow } from '@/styles/Shadow'
interface ContactPickerProps {
  addContact: ({ name, phone }: {name: string, phone: string}) => void
}
const ContactPicker = ({ addContact } : ContactPickerProps) => {
  const navigate = useAppNavigation()
  const pickContact = async (): Promise<void> => {
    if ('contacts' in navigator && 'ContactsManager' in window) {
      try {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const contacts = await (navigator.contacts as any).select(
          ['name', 'tel'],
          { multiple: true }
        )
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        contacts.map((contact: any, i : number) => {
          addContact({ name: contact[i]?.name[0], phone: contact[i]?.tel[0] })
        })
        // Redirige a la página de contactos después de seleccionar
        navigate.goToContact()
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
    <ButtonShadow fullWidth onClick={pickContact}>
      Seleccionar contacto desde tu teléfono
    </ButtonShadow>
  )
}

export default ContactPicker
