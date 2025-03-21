import { Button, Stack } from '@mui/material'

interface AceptCancelButtonsProps {
    handleCancelar: () => void
    handleAceptar: () => void
}

const AceptCancelButtons = ({ handleCancelar, handleAceptar }: AceptCancelButtonsProps) => {
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
          onClick={handleCancelar}
          >
          {'Cancelar'}
        </Button>
        <Button
          variant='contained'
          onClick={handleAceptar}
          >
          {'Aceptar'}
        </Button>
      </Stack>
  )
}

export default AceptCancelButtons