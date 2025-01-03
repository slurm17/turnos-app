import { Contact, Reminder } from '@/types/Contact'
import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

// Definición de la interfaz para el estado del store
interface ContactState {
  contacts: Contact[];
  addContacts: (newContacts: Contact[]) => void;
  addContact: (newContact: Contact) => void;
  clearContacts: () => void;
  reminder: Reminder[]
  addReminder: (newReminder: Reminder) => void;
  clearReminder: () => void;
}

// Creación del store con persistencia
export const useContactStore = create<ContactState>()(
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
      reminder: [],
      addReminder: (newReminder) => {
        set((state)=>({
          reminder: [...state.reminder, newReminder]
        }))
      },
      clearReminder: () => set({ reminder: [] })
    }),
    {
      name: 'contact-storage', // Nombre clave en el almacenamiento
      storage: createJSONStorage(() => localStorage), // Utiliza localStorage para persistencia
    }
  )
)
