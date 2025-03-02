import { Button, ListItemButton, Typography } from '@mui/material'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import { Reminder } from '@/types/Reminder'
import { ListItemShadow } from '@/styles/Shadow'

const ReminderCard = ({ name, phone, date }: Reminder) => {
    return (
      <ListItemShadow>
        <ListItemButton /*rowSpacing={.25} columnSpacing={1} */sx={{
          display: 'flex',
          flexDirection: 'column'
        }}>
          <Typography align='left'>
              {name}
          </Typography >
          <Typography align='left'>
              {phone}
          </Typography>
          <Typography align='left'>
              {date}
          </Typography>
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
        </ListItemButton>
      </ListItemShadow>
    )
}

export default ReminderCard