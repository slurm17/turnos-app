import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material'
import { useForm, SubmitHandler } from 'react-hook-form'

import { AcceptCancelButtons } from '@/components'
import { useAppNavigation } from '@/hooks/navigate/useAppNavigation'
import { useContactStore } from '@/store'
import RegisterInput from '@/components/inputs/RegisterInput'
import { nameValidationRules } from '@/constants/input/nameValidationRules'
import { phoneValidationRules } from '@/constants/input/phoneValidationRules'

interface ContactManuallyModalProps {
  open: boolean;
  onClose: () => void;
}

interface FormData {
  name: string,
  phone: string,
}

const ContactManuallyModal = (props: ContactManuallyModalProps) => {
  const navigate = useAppNavigation()
  const addContact = useContactStore((state) => state.addContact)
  const { reset, register, formState: { errors }, handleSubmit } = useForm<FormData>()
  const onSubmit: SubmitHandler<FormData> = (data) => {
    addContact({ phone: data.phone, name: data.name })
    props.onClose()
    navigate.goToContact()
  }

  const handleClose = () => {
    reset()
    props.onClose()
  }

  return (
    <Dialog
      open={props.open}
      onClose={handleClose}
      PaperProps={{
          component: 'form',
          noValidate: true,
          onSubmit: handleSubmit(onSubmit)
        }}
      >
      <DialogTitle>Agregar contacto</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Ingresá un número de teléfono válido para poder mandar mensajes a través de Whatsapp.
        </DialogContentText>
        <RegisterInput<FormData>
          register={register}
          errors={errors}
          label='Nombre'
          name="name"
          variant="standard"
          fullWidth
          margin="dense"
          autoComplete='off'
          autoFocus
          rules={nameValidationRules}
          type='text'
        />
        <RegisterInput<FormData>
          register={register}
          errors={errors}
          label='Teléfono'
          name="phone"
          variant="standard"
          fullWidth
          margin="dense"
          autoComplete='off'
          rules={phoneValidationRules}
          slotProps={{
            input: {
            inputMode: 'numeric',
            },
          }}
          type="tel"
        />
      </DialogContent>
      <DialogActions>
        <AcceptCancelButtons onCancel={handleClose} />
      </DialogActions>
    </Dialog>
  )
}

export default ContactManuallyModal