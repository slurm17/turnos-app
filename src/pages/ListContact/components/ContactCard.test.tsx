import { render, screen, fireEvent } from '@testing-library/react'
import ContactCard from './ContactCard'

// Mock componente ListItemShadow (necesario)
jest.mock('@/styles/Shadow', () => ({
  ListItemShadow: jest.fn(({ children, ...props }) => <div {...props}>{children}</div>),
}))

// jest.mock('@mui/material', () => ({
//   ListItemButton: jest.fn(({ children }) => <div>{children}</div>),
//   ListItemText: jest.fn(({ primary }) => <div>{primary}</div>),
// }))

describe('ContactCard', () => {
  it('debe renderizar el nombre y el teléfono', () => {
    render(<ContactCard name="Lucas" phone="3435123132" handleClick={() => {}} />)
    const combinedText = screen.getByText('Lucas 3435123132')
    expect(combinedText).toBeInTheDocument()
  })

  it('debe ejecutar onClick al hacer clic en el botón', () => {
    // Simula una función para manejar el clic
    const handleClick = jest.fn()
    render(<ContactCard name="Lucas" phone="3435123132" handleClick={handleClick} />)
    // Simula un clic en el botón
    const button = screen.getByText('Lucas 3435123132')
    fireEvent.click(button)
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})