import { Button } from '@mui/material'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'

interface WhatsAppButtonProps {
    phone : string,
    text: string
}

const handleClickSendMessage = (phone : string) => {
  return window.open(`https://wa.me/${phone}`)
}

const WhatsAppButton = ({ phone, text } : WhatsAppButtonProps) => {
  return (
    <Button
      onClick={() => handleClickSendMessage(phone)}
      size='small'
      sx={{
            padding: '5px 17px',
            color: '#fff',
            backgroundColor: '#4FCE5D',
            borderRadius: '5px',
        }}
      endIcon={<WhatsAppIcon fontSize={'small'}/>}
    >   {text}
    </Button>
  )
}

export default WhatsAppButton