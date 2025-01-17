import { Dayjs } from 'dayjs'
import { Contact } from '../Contact'

export type Reminder = Contact & {
    fecha: Dayjs,
    note?: string
} 