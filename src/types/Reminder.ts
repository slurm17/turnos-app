import { Dayjs } from 'dayjs'
import { Contact } from './Contact'

export interface Reminder extends Contact {
    id: string,
    date: Dayjs,
    note?: string
} 

export type ReminderWithoutId = Omit<Reminder, 'id'>
