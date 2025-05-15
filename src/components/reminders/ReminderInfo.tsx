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
        <Typography>{`${name || 'name'} (${phone || 'phone'})`}</Typography>
        <Typography>{`${DateUtils.getfullDate(date)} (${DateUtils.getRemainingDaysMessage(date)})`}</Typography>
    </>
  )
}

export default ReminderInfo