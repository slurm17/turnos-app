import { Box, Button, Grid2 as Grid, Typography } from '@mui/material'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Reminder } from '@/types/Reminder'

  
const ReminderCard = ({ name, phone, fecha }: Reminder) => {
    const location = useLocation()

  useEffect(() => {
    const handleBackButton = (e : Event) => {
      if (location.pathname === '/') {
        e.preventDefault()
        const confirmExit = window.confirm('¿Deseas salir de la aplicación?')
        if (confirmExit) {
            window.close()
          // Lógica adicional para cerrar la aplicación si es posible
        }
      }
    }

    window.addEventListener('popstate', handleBackButton)

    return () => {
      window.removeEventListener('popstate', handleBackButton)
    }
  }, [location])
  return (
    <Box sx={{
        backgroundColor: '#fff',
        width: '100%',
        borderRadius: '7px',
        boxShadow: '0px 0px 12px -3px rgba(0,0,0,0.34)'
    }}>
        <Grid container rowSpacing={1} columnSpacing={1} sx={{
                padding: 1,
            }}>
            <Grid size={12}>
                <Typography align='left'>
                    {name}
                </Typography >
            </Grid>
            <Grid size={12}>
                <Typography align='left'>
                    {phone}
                </Typography>
            </Grid>
            <Grid size={12} sx={{
                // display: 'grid',
                // placeItems: 'center'
            }}>
                <Typography align='left'>
                    {fecha}
                </Typography>
            </Grid>
            <Grid size={12} sx={{
                placeItems: 'center'
            }}>
                <Button
                    onClick={() => window.open(`https://wa.me/${phone}`)}
                    size='small'
                    sx={{
                        height: '100%',
                        width: '100%',
                        maxWidth: '100px',
                        color: '#fff',
                        display: 'grid',
                        placeItems: 'center',
                        backgroundColor: '#4FCE5D',
                        borderRadius: '4px',
                    }}
                >
                    <WhatsAppIcon fontSize={'small'}/>
                </Button>
            </Grid>
        </Grid>
    </Box>
  )
}

export default ReminderCard