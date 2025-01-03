// type Fecha = `${string}/${string}/${string}`

export interface Contact {
    name: string;
    phone: string;
  }

export type Reminder = Contact & {
    fecha: string
} 