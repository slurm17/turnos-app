import { render, screen, fireEvent } from '@testing-library/react'
import { Contact } from '@/types/Contact'
import { vi } from 'vitest'
import { describe, it, expect } from 'vitest'
import ContactList from './ContactList'
// Mock de ContactCard
vi.mock('./ContactCard', () => ({
    __esModule: true,
    default: vi.fn(({ handleClick, ...props }) => {
      return (
        <div data-testid="contact-card" onClick={handleClick}>
          {JSON.stringify(props)}
        </div>
      )
    }),
  }))

describe('ContactList', () => {
  const mockContacts: Contact[] = [
    { name: 'Lucas', phone: '3434486600' },
    { name: 'Juan', phone: '3434486601' },
  ]

  const mockOnClickContact = vi.fn()

  it('debe renderizar la lista de contactos', () => {
    render(<ContactList contacts={mockContacts} onClickContact={mockOnClickContact} />)

    // Verificar que se rendericen los contactos
    const contactCards = screen.getAllByTestId('contact-card')
    expect(contactCards).toHaveLength(mockContacts.length)

    // Verificar que los datos de los contactos estén presentes
    expect(contactCards[0]).toHaveTextContent(JSON.stringify(mockContacts[0]))
    expect(contactCards[1]).toHaveTextContent(JSON.stringify(mockContacts[1]))
  })

  it('debe llamar a onClickContact al hacer clic en un contacto', () => {
    render(<ContactList contacts={mockContacts} onClickContact={mockOnClickContact} />)

    // Hacer clic en el primer contacto
    const firstContactCard = screen.getAllByTestId('contact-card')[0]
    fireEvent.click(firstContactCard)

    // Verificar que onClickContact se llamó con el contacto correcto
    expect(mockOnClickContact).toHaveBeenCalledTimes(1)
    expect(mockOnClickContact).toHaveBeenCalledWith(mockContacts[0])
  })
})