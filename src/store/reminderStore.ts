import { Reminder } from '@/types/Reminder'
import dayjs from 'dayjs'
import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

// Definición de la interfaz para el estado del store
interface ReminderState {
  reminder: Reminder[]
  addReminder: (newReminder: Reminder) => void;
  clearReminder: () => void;
}

// Creación del store con persistencia
export const useReminderStore = create<ReminderState>()(
  persist(
    (set) => ({
      reminder: [],
      addReminder: (newReminder) => {
        const reminderWithDayjs: Reminder = {
            ...newReminder,
            fecha: dayjs(newReminder.fecha), // Convierte la fecha a Dayjs
        }
        set((state)=>({
          reminder: [...state.reminder, reminderWithDayjs]
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
