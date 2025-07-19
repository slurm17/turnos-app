import { Alert, Box, Button } from '@mui/material'
import ForwardIcon from '@mui/icons-material/Forward'

import { useAppNavigation } from '@/hooks/navigate/useAppNavigation'

const InfoEmptyContacts = () => {
  const navigate = useAppNavigation()
  return (
    <>
      <Alert  severity="info">Para agregar un recordatorio necesita tener contactos agendados.</Alert>
      <Box sx={{ display: 'grid', placeItems: 'center' }}>
        <Button 
          onClick={navigate.goToContactAdd}
          variant='contained' 
          endIcon={<ForwardIcon/>}
              >
          Agregar contacto
        </Button>
      </Box>
    </>
  )
}

export default InfoEmptyContacts