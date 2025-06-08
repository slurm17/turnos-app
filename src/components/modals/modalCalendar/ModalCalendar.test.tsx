import { describe, expect, test, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import userEvent from '@testing-library/user-event'
import dayjs from 'dayjs'

import { ContactData } from '@/types/ContactData'
import ModalCalendar from '@/components/modals/modalCalendar/ModalCalendar'

const mockContact : ContactData = { name: 'John Doe', phone: '123-456-7890' }

describe('ModalCalendar', () => {
  const setup = ( open = true, onCancel = vi.fn(), onAccept = vi.fn() ) => {
    render(
      <LocalizationProvider
        dateAdapter={AdapterDayjs}
        adapterLocale={'es'}
            >   
        <ModalCalendar 
          contact={mockContact} 
          open={open} 
          onCancel={onCancel} 
          onAccept={onAccept} 
          initialDate={dayjs('2030-01-01')}
                    />
      </LocalizationProvider>
    )
  }

  test('debería renderizar cuando open es true', () => {
    setup()
    // screen.logTestingPlaygroundURL()
    expect(screen.getByText(/john doe/i)).toBeInTheDocument()
    expect(screen.getByText(/123-456-7890/)).toBeInTheDocument()
    expect(screen.getByText(/mar. 1 ene/i)).toBeInTheDocument()
    expect(screen.getByText(/enero 2030/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /aceptar/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /cancelar/i })).toBeInTheDocument()
  })

  test('debería llamar a onCancel al hacer click en Cancelar', async () => {
    const onCancel = vi.fn()
    setup(true, onCancel)
    const button = screen.getByRole('button', { name: /cancelar/i })
    await userEvent.click(button)
    expect(onCancel).toHaveBeenCalled()
  })

  test('debería llamar a onAccept al hacer click en Aceptar y recibir la fecha seleccionada', async () => {
    const onAccept = vi.fn()
    setup(true, vi.fn(), onAccept)
    const button = screen.getByRole('button', { name: /aceptar/i })
    await userEvent.click(button)
    expect(onAccept).toHaveBeenCalled()
    expect(onAccept).toHaveBeenCalledWith(expect.any(dayjs))
  })

  test('no se debería renderizar cuando open es false', async () => {
    setup(false)
    expect(screen.queryByText(/john doe/i)).not.toBeInTheDocument()
  })
})
