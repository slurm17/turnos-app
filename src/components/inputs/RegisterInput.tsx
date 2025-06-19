import { TextField, TextFieldProps } from '@mui/material'
import { FieldErrors, FieldValues, Path, RegisterOptions, UseFormRegister } from 'react-hook-form'

type RegisterInputProps<T extends FieldValues> = {
    register: UseFormRegister<T>
    errors?: FieldErrors<T>
    name: Path<T>
    rules?: RegisterOptions
} & TextFieldProps

const RegisterInput  = <T extends FieldValues>({ register, errors, name, rules, ...props }: RegisterInputProps<T>) => {
  const error = errors?.[name]
  return (
    <TextField
      {...props}
      {...register(
        name, rules as RegisterOptions<T>
      )}
      error={!!error}
      helperText={error?.message as string}
    />
  )
}

export default RegisterInput