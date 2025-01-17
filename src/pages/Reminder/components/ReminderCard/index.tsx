import { Box, Button, Grid2 as Grid, Typography } from '@mui/material'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import { Reminder } from '@/types/Reminder'
// import dayjs from 'dayjs'

  
const ReminderCard = ({ name, phone, fecha }: Reminder) => {
  return (
    <Box sx={{
        backgroundColor: '#fff',
        width: '100%',
        borderRadius: '7px',
        boxShadow: '0px 0px 12px -3px rgba(0,0,0,0.34)'
    }}>
        <Grid container rowSpacing={.25} columnSpacing={1} sx={{
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
            <Grid size={12}>
                <Typography align='left'>
                    {/* {dayjs(fecha).format('DD/MM/YYYY')} */}
                    {fecha.toString()}
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
                        maxWidth: '200px',
                        color: '#fff',
                        backgroundColor: '#4FCE5D',
                        borderRadius: '4px',
                    }}
                    endIcon={<WhatsAppIcon fontSize={'small'}/>}
                >   {'Enviar mensaje'}
                </Button>
            </Grid>
        </Grid>
    </Box>
  )
}

export default ReminderCard