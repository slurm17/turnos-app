import { Dayjs } from 'dayjs'

import { DateUtils } from '@/utils'

interface UseReminderMessageProps {
    date: Dayjs
}

export const useReminderMessage = ({ date }: UseReminderMessageProps) => {
  const fullDate = DateUtils.getfullDate(date)
  const remainingDaysMessage = DateUtils.getRemainingDaysMessage(date)
  return { fullDate, remainingDaysMessage }
}
