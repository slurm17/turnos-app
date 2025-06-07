import { describe, test, expect } from 'vitest'

import ContactUtils from './ContactUtils'

import { ContactData } from '@/types/ContactData'

describe('ContactUtils - isContactsEmpty', () => {
  test('debe devolver true si el arreglo de contactos está vacío', () => {
    const contacts : ContactData[] = []
    expect(ContactUtils.isContactsEmpty(contacts)).toBeTruthy()
  })
    
  test('debe devolver false si el arreglo de contactos no está vacío', () => {
    const contacts : ContactData[] = [{ name: 'Lucas', phone: '3434486600' }]
    expect(ContactUtils.isContactsEmpty(contacts)).toBeFalsy()
  })
})

describe('ContactUtils - isContactEmpty', () => {
  test('debe devolver true si el nombre del contacto está vacío', () => {
    const contact: ContactData = { name: '', phone: '3434486600' }
    expect(ContactUtils.isContactEmpty(contact)).toBeTruthy()
  })
    
  test('debe devolver true si el nombre del contacto solo tiene espacios en blanco', () => {
    const contact: ContactData = { name: '   ', phone: '3434486600' }
    expect(ContactUtils.isContactEmpty(contact)).toBeTruthy()
  })
    
  test('debe devolver false si el nombre del contacto no está vacío', () => {
    const contact: ContactData = { name: 'Lucas', phone: '3434486600' }
    expect(ContactUtils.isContactEmpty(contact)).toBeFalsy()
  })
})

describe('ContactUtils - getContactEmpty', () => {
  test('debe devolver un contacto vacío', () => {
    const contact : ContactData = { name: '', phone: '' }
    expect(ContactUtils.getContactEmpty()).toEqual(contact)
  })
})