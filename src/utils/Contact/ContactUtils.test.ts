import { Contact } from '@/types/Contact'
import ContactUtils from './ContactUtils'

describe('ContactUtils - isContactsEmpty', () => {
    test('debe devolver true si el arreglo de contactos está vacío', () => {
        const contacts : Contact[] = []
        expect(ContactUtils.isContactsEmpty(contacts)).toBeTruthy()
    })
    
    test('debe devolver false si el arreglo de contactos no está vacío', () => {
        const contacts : Contact[] = [{ name: 'Lucas', phone: '3434486600' }]
        expect(ContactUtils.isContactsEmpty(contacts)).toBeFalsy()
    })
})

describe('ContactUtils - isContactEmpty', () => {
    test('debe devolver true si el nombre del contacto está vacío', () => {
        const contact: Contact = { name: '', phone: '3434486600' }
        expect(ContactUtils.isContactEmpty(contact)).toBeTruthy()
    })
    
    test('debe devolver true si el nombre del contacto solo tiene espacios en blanco', () => {
        const contact: Contact = { name: '   ', phone: '3434486600' }
        expect(ContactUtils.isContactEmpty(contact)).toBeTruthy()
    })
    
    test('debe devolver false si el nombre del contacto no está vacío', () => {
        const contact: Contact = { name: 'Lucas', phone: '3434486600' }
        expect(ContactUtils.isContactEmpty(contact)).toBeFalsy()
    })
})