import { RegisterOptions } from 'react-hook-form'

export const nameValidationRules : RegisterOptions = {
  minLength: {
    value: 4,
    message: 'El nombre debe tener al menos 4 caracteres',
  },
  maxLength: {
    value: 50,
    message: 'El nombre no puede tener más de 50 caracteres',
  },
  required: 'El nombre es requerido',
}