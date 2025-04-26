import { ContactData } from '@/types/ContactData'
import ContactUtils from './ContactUtils'
import { describe, test, expect } from 'vitest'

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