import { ListItemShadow } from '@/styles/components/Shadow'
import { ListItemButton, ListItemText } from '@mui/material'

interface ContactCardProps {
    phone: string,
    name: string,
    onClick: () => void
}

const ContactCard = ({ name, phone, ...props }: ContactCardProps) => {
  return (
    <ListItemShadow disablePadding {...props}>
      <ListItemButton>
        <ListItemText primary={`${name} ${phone}` }/>
      </ListItemButton>
    </ListItemShadow>
  )
}

export default ContactCard