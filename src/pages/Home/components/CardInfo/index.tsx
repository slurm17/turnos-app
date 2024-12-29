import { Box, Button, Grid2 as Grid, Typography } from '@mui/material'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
interface Props {
    name: string,
    phone: string,
}

const CardInfo = ({ name, phone }: Props) => {
  console.log('🚀 ~ CardInfo ~ phone:', phone)
  return (
    <Box sx={{
        backgroundColor: '#fff',
        width: '100%',
        // border: '1px solid black',
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
                {/* <Typography align='left'>
                    {phone}
                </Typography> */}
            </Grid>
            <Grid size={12} sx={{
                // display: 'grid',
                // placeItems: 'center'
            }}>
                <Typography align='left'>
                    {'1 Semana'} {' SAB 28 OCT'}
                </Typography>
            </Grid>
            <Grid size={6}>
                {/* <Box
                    sx={{
                        height: '100%',
                        color: '#fff',
                        display: 'grid',
                        placeItems: 'center',
                        backgroundColor: 'rgb(38, 223, 223)',
                        borderRadius: '4px'
                    }}
                >
                    <SettingsIcon fontSize={'large'}/>
                </Box> */}
            </Grid>
            <Grid size={12} sx={{
                placeItems: 'center'
            }}>
                <Button
                    sx={{
                        height: '100%',
                        width: '100%',
                        maxWidth: '100px',
                        color: '#fff',
                        display: 'grid',
                        placeItems: 'center',
                        backgroundColor: '#4FCE5D',
                        borderRadius: '4px'
                    }}
                >
                    <WhatsAppIcon fontSize={'large'}/>
                </Button>
            </Grid>
        </Grid>
    </Box>
  )
}

export default CardInfo