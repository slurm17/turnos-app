import { Dayjs } from 'dayjs'

import { ContactData } from './ContactData'

export interface ReminderData extends ContactData {
    id: string,
    date: Dayjs,
    note?: string
} 

export type ReminderDataWithoutId = Omit<ReminderData, 'id'>
