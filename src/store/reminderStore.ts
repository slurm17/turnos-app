import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { v4 as uuidv4 } from 'uuid'
import { Dayjs } from 'dayjs'

import { ReminderData, ReminderDataWithoutId } from '@/types/ReminderData'
import dayjs from '@/dayjsConfig'
// Definición de la interfaz para el estado del store
interface ReminderState {
  reminder: ReminderData[]
  addReminder: (newReminder: ReminderDataWithoutId) => void;
  clearReminder: () => void;
  deleteReminder: (id: string) => void;
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
      clearReminder: () => set({ reminder: [] }),
      deleteReminder: (id : string) => set((state) => ({ reminder: state.reminder.filter((reminder) => reminder.id !== id) })),
    }),
    {
      name: 'reminder-storage', 
      storage: {
        getItem: (name) => {
          const str = localStorage.getItem(name)
          if (str) {
            const parsed = JSON.parse(str)
            const remindersWithDayjs = parsed.state.reminder?.map((reminder: ReminderData) => ({
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
