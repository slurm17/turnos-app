import { Contact } from './Contact'

export interface Reminder extends Contact {
    date: string,
    note?: string
} 
