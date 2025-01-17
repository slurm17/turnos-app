import { Box, Typography } from '@mui/material'

interface ContactCardProps {
    phone: string,
    name: string,
    onClick: () => void
}

const ContactCard = ({ name, phone, ...props }: ContactCardProps) => {
  return (
    <Box {...props}>
        <Typography>{name}</Typography>
        <Typography>{phone}</Typography>
    </Box>
  )
}

export default ContactCard