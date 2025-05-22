import { useReminderMessage } from '@/hooks/reminder'
import { Typography } from '@mui/material'
import { Dayjs } from 'dayjs'

interface ReminderInfoProps {
  name: string,
  phone: string,
  date: Dayjs,
}

const ReminderInfo = ({ name, phone, date }: ReminderInfoProps) => {
  const { fullDate, remainingDaysMessage } = useReminderMessage({ date })
  return (
    <>
        <Typography>{`${name} (${phone})`}</Typography>
        <Typography>{`${fullDate} (${remainingDaysMessage})`}</Typography>
    </>
  )
}

export default ReminderInfo