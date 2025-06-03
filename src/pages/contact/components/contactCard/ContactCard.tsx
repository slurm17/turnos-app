import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'

interface ContactCardProps {
    phone: string,
    name: string,
    handleClick: () => void
}

const ContactCard = ({ name, phone, handleClick }: ContactCardProps) => {
  return (
    <ListItemButton onClick={handleClick}
      sx={{
        borderRadius: '4px',
        backgroundColor: 'white',
        boxShadow: '0px 0px 15px 0px rgba(0,0,0,0.1)',
        paddingBottom: 0,
        paddingTop: 0,
    }}>
      <ListItemIcon>
        <AccountCircleIcon fontSize='large' />
      </ListItemIcon>
      <ListItemText
        primary={`${name}`}
        secondary={`${phone}`}
        sx={{ whiteSpace: 'pre-line' }}
      />
    </ListItemButton>
  )
}

export default ContactCard