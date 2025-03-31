import { DateUtils } from '@/utils'
import { Typography } from '@mui/material'
import { Dayjs } from 'dayjs'

interface ReminderInfoProps {
    name: string,
    phone: string,
    date: Dayjs,
}

const ReminderInfo = ({ name, phone, date }: ReminderInfoProps) => {
  return (
    <>
        <Typography>{name || 'NOMBRE'}</Typography>
        <Typography>{phone || 'TELEFONO'}</Typography>
        <Typography>{DateUtils.formatDDMMAAAA(date)}</Typography>
    </>
  )
}

export default ReminderInfo