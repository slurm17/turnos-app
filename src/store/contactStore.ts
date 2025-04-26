import { ContactData } from '@/types/ContactData'
import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

// Definición de la interfaz para el estado del store
interface ContactState {
  contacts: ContactData[];
  addContacts: (newContacts: ContactData[]) => void;
  addContact: (newContact: ContactData) => void;
  clearContacts: () => void;
}

// Creación del store con persistencia
const useContactStore = create<ContactState>()(
  persist(
    (set) => ({
      contacts: [],
      addContact: (newContact) => 
        set((state) => ({
          contacts: [...state.contacts, newContact],
        })),
      addContacts: (newContacts) =>
        set((state) => ({
          contacts: [...state.contacts, ...newContacts],
        })),
      clearContacts: () => set({ contacts: [] }),
    }),
    {
      name: 'contact-storage', // Nombre clave en el almacenamiento
      storage: createJSONStorage(() => localStorage), // Utiliza localStorage para persistencia
    }
  )
)

export default useContactStore

