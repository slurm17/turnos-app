import DateUtils from './DateUtils'
import dayjs from '@/dayjsConfig'
import { describe, test, expect } from 'vitest'

describe('DateUtils - formatDDMMAAAA', () => {
    test('debe formatear correctamente una fecha a dd/MM/yyyy', () => {
        const fecha = dayjs('2023-10-05')
        const resultado = DateUtils.formatDDMMAAAA(fecha)
        expect(resultado).toBe('05/10/2023')
    })
})