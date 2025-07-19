import { Alert, Box, Button } from '@mui/material'
import ForwardIcon from '@mui/icons-material/Forward'

import { useAppNavigation } from '@/hooks/navigate/useAppNavigation'
const InfoEmptyReminders = () => {
  const navigate = useAppNavigation()
  return (
    <>
      <Alert severity="info">Para agregar un recordatorio necesita seleccionar un contacto.</Alert>
      <Box sx={{ display: 'grid', placeItems: 'center' }}>
        <Button 
          onClick={navigate.goToContact}
          variant='contained' 
          endIcon={<ForwardIcon/>}
              >
          ir a contactos
        </Button>
      </Box>
    </>
  )
}

export default InfoEmptyReminders