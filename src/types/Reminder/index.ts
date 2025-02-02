import { Contact } from '../Contact'

export type Reminder = Contact & {
    date: string,
    note?: string
} 