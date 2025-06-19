import { RegisterOptions } from 'react-hook-form'

export const phoneValidationRules : RegisterOptions = {
  required: 'El teléfono es requerido',
  pattern: {
    value: /^[0-9]+$/,
    message: 'Solo se permiten números',
  },
  minLength: {
    value: 7,
    message: 'El teléfono debe tener al menos 8 dígitos',
  },
  maxLength: {
    value: 15,
    message: 'El teléfono no puede tener más de 15 dígitos',
  },
  validate: {
    noEmpiezaEn0: value => !value.startsWith('0') || 'El teléfono no debe comenzar con 0',
    noEmpiezaEn15: value  => !value.startsWith('15') || 'El teléfono no debe comenzar con 15',
  },
}
