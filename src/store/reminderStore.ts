import { Reminder, ReminderWithoutId } from '@/types/Reminder'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { v4 as uuidv4 } from 'uuid'
import dayjs, { Dayjs } from 'dayjs'
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
      name: 'reminder-storage', 
      storage: {
        getItem: (name) => {
          const str = localStorage.getItem(name)
          if (str) {
            const parsed = JSON.parse(str)
            const remindersWithDayjs = parsed.state.reminder?.map((reminder: Reminder) => ({
              ...reminder,
              date: dayjs(reminder.date)
            })) || []
            return {
              state: {
                reminder: remindersWithDayjs,
              }
            }
          }
          return { 
            state: { 
              reminder: [],
            } 
          }
        },
        setItem: (name, value) => {
          const str = JSON.stringify(value)
          localStorage.setItem(name, str)
        },
        removeItem: (name) => localStorage.removeItem(name),
      },
    }
  )
)

export default useReminderStore
