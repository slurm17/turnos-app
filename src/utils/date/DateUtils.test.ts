import { describe, test, expect } from 'vitest'

import DateUtils from './DateUtils'

import dayjs from '@/dayjsConfig'

describe('DateUtils - formatDDMMAAAA', () => {
    test('debe formatear correctamente una fecha a dd/mm/yyyy', () => {
        const fecha = dayjs('2023-10-05')
        const resultado = DateUtils.formatDDMMAAAA(fecha)
        expect(resultado).toBe('05/10/2023')
    })
})

describe('DateUtils - getRemainingDaysMessage', () => {
    test('debe devolver "Hoy" si la fecha que recibe es la de hoy', () => {
        const fecha = dayjs() // Fecha actual
        const resultado = DateUtils.getRemainingDaysMessage(fecha)
        expect(resultado).toBe('Hoy')
    })
    test('debe devolver "Vencido." si la fecha que recibe es anterior a la de hoy ', () => {
        const fecha = dayjs('2025-01-01')
        const resultado = DateUtils.getRemainingDaysMessage(fecha)
        expect(resultado).toBe('Vencido')
    })
    test('debe devolver la cantidad de días que faltan para llegar al dia de hoy', () => {
        const fecha = dayjs().add(5, 'day')
        const resultado = DateUtils.getRemainingDaysMessage(fecha)
        expect(resultado).toBe('5 días')
    })
})

describe('DateUtils - getfullDate', () => {
    test('debe devolver la fecha formateada correctamente', () => {
        const fecha = dayjs('2025-01-05')
        const resultado = DateUtils.getfullDate(fecha)
        expect(resultado).toBe('Dom. 5 Ene')
    })
})

describe('DateUtils - isExpired', () => {
    test('debe devolver true si la fecha es anterior a la de hoy', () => {
        const fecha = dayjs('2025-01-01')
        const resultado = DateUtils.isExpired(fecha)
        expect(resultado).toBe(true)
    })
    test('debe devolver false si la fecha es posterior a la de hoy', () => {
        const fecha = dayjs().add(1, 'day')
        const resultado = DateUtils.isExpired(fecha)
        expect(resultado).toBe(false)
    })
})