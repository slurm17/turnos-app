import { Reminder } from '@/types/Reminder'
import { parse } from 'date-fns'
import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

// Definición de la interfaz para el estado del store
interface ReminderState {
  reminder: Reminder[]
  addReminder: (newReminder: Reminder) => void;
  clearReminder: () => void;
}

 const sortDates = (a: string, b: string) => {
    const dateA = parse(a, 'dd/MM/yyyy', new Date())
    const dateB = parse(b, 'dd/MM/yyyy', new Date())
    return dateA.getTime() - dateB.getTime()
  }

// Creación del store con persistencia
export const useReminderStore = create<ReminderState>()(
  persist(
    (set) => ({
      reminder: [],
      addReminder: (newReminder) => {
        set((state)=>({
          // reminder: [...state.reminder, newReminder].sort((a, b) => a.date.diff(b.date))
          reminder: [...state.reminder, newReminder].sort((a,b)=> sortDates(a.date, b.date))
        }))
      },
      clearReminder: () => set({ reminder: [] })
    }),
    {
      name: 'reminder-storage', // Nombre clave en el almacenamiento
      storage: createJSONStorage(() => localStorage), // Utiliza localStorage para persistencia
    }
  )
)
