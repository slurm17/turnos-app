// Los botones se posicionan en la parte inferior derecha del componente padre
import { Button, Stack } from '@mui/material'

interface AcceptCancelButtonsProps {
    onCancel: () => void
    onAccept?: () => void
}

const AcceptCancelButtons = ({ onCancel, onAccept }: AcceptCancelButtonsProps) => {
  return (
    <Stack
        spacing={2}
        direction="row"
        sx={{
          width: '100%',
          justifyContent: 'flex-end',
          alignItems: 'center',
          mt: 3
        }}
      >
        <Button
          onClick={onCancel}
          >
          {'Cancelar'}
        </Button>
        <Button
          type='submit'
          onClick={onAccept}
          >
          {'Aceptar'}
        </Button>
      </Stack>
  )
}

export default AcceptCancelButtons