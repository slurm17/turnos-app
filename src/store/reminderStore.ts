import { Reminder, ReminderWithoutId } from '@/types/Reminder'
import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { v4 as uuidv4 } from 'uuid'
import { Dayjs } from 'dayjs'
// Definición de la interfaz para el estado del store
interface ReminderState {
  reminder: Reminder[]
  addReminder: (newReminder: ReminderWithoutId) => void;
  clearReminder: () => void;
}

 const sortDates = (a: Dayjs, b: Dayjs) => {
    return a.valueOf() - b.valueOf()
  }

// Creación del store con persistencia
const useReminderStore = create<ReminderState>()(
  persist(
    (set) => ({
      reminder: [],
      addReminder: (newReminder) => {
        const reminderWithId = {
          ...newReminder,
          id: uuidv4()
        }
        set((state)=>({
          reminder: [...state.reminder, reminderWithId].sort((a,b)=> sortDates(a.date, b.date))
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

export default useReminderStore
