import { DateUtils } from "@/utils"
import { Dayjs } from "dayjs"

interface UseReminderMessageProps {
    date: Dayjs
}

export const useReminderMessage = ({ date }: UseReminderMessageProps) => {
    const fullDate = DateUtils.getfullDate(date)
    const remainingDaysMessage = DateUtils.getRemainingDaysMessage(date)
    return { fullDate, remainingDaysMessage }
}
