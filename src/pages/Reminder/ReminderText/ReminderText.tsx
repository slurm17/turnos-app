import { Typography } from '@mui/material'

interface ReminderTextProps {
    name: string,
    phone: string,
    date: string
}

const ReminderText = ({ name, phone, date }: ReminderTextProps) => {
  return (
    <>
        <Typography align='left'>
            {name}
        </Typography >
        <Typography align='left'>
            {phone}
        </Typography>
        <Typography align='left'>
            {date}
        </Typography>
    </>
  )
}

export default ReminderText