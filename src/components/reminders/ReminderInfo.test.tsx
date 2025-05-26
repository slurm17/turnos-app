import { render, screen } from '@testing-library/react'
import { describe, expect, test, vi } from 'vitest'
import dayjs from 'dayjs'

import ReminderInfo from './ReminderInfo'

vi.mock('@/hooks/reminder', () => ({
  useReminderMessage: () => ({
    fullDate: '25 de diciembre de 2025',
    remainingDaysMessage: 'faltan 3 días',
  }),
}))

describe('ReminderInfo', () => {
  test('debería renderizar nombre, teléfono y mensajes de fecha correctamente', () => {
    render(
      <ReminderInfo
        name="Juan Pérez"
        phone="123456789"
        date={dayjs('2025-12-25')}
      />
    )

    expect(screen.getByText('Juan Pérez (123456789)')).toBeInTheDocument()
    expect(screen.getByText('25 de diciembre de 2025 (faltan 3 días)')).toBeInTheDocument()
  })
})
