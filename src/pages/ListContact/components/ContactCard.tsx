import { ListItemShadow } from '../../../styles/Shadow'
import { ListItemButton, ListItemText } from '@mui/material'

interface ContactCardProps {
    phone: string,
    name: string,
    handleClick: () => void
}

const ContactCard = ({ name, phone, handleClick }: ContactCardProps) => {
  return (
    <ListItemShadow onClick={handleClick}>
      <ListItemButton>
        <ListItemText primary={`${name} ${phone}` }/>
      </ListItemButton>
    </ListItemShadow>
  )
}

export default ContactCard