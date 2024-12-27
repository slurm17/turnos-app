import { Box, Grid2 as Grid, Typography } from '@mui/material'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'

interface Props {
    name: string,
    phone: string,
}

const CardInfo = ({ name, phone }: Props) => {
  return (
    <Box sx={{
        backgroundColor: '#fff',
        width: '100%',
        border: '1px solid black'
    }}>
        <Grid container>
            <Grid size={9}>
                <Typography>
                    {name}
                </Typography>
                <Typography>
                    {phone}
                </Typography>
            </Grid>
            <Grid size={3}>
                <Box
                    sx={{
                        height: '100%',
                        // width: '100%',
                        color: '#fff',
                        display: 'grid',
                        placeItems: 'center',
                        backgroundColor: '#4FCE5D'
                    }}
                >
                    <WhatsAppIcon fontSize={'large'}/>
                </Box>
            </Grid>
        </Grid>
    </Box>
  )
}

export default CardInfo