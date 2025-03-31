import { Button } from '@mui/material'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'

interface WhatsAppButtonProps {
    handleClick : () => void,
    text: string
}

const WhatsAppButton = ({ handleClick, text } : WhatsAppButtonProps) => {
  return (
    <Button
        onClick={handleClick}
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