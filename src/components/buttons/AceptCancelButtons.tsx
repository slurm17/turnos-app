import { Button, Stack } from '@mui/material'

interface AceptCancelButtonsProps {
    onCancel: () => void
    onAccept: () => void
}

const AcceptCancelButtons = ({ onCancel, onAccept }: AceptCancelButtonsProps) => {
  return (
    <Stack
        spacing={5}
        direction="row"
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
          mt: 4
        }}
      >
        <Button
          variant='outlined'
          onClick={onCancel}
          >
          {'Cancelar'}
        </Button>
        <Button
          variant='contained'
          onClick={onAccept}
          >
          {'Aceptar'}
        </Button>
      </Stack>
  )
}

export default AcceptCancelButtons