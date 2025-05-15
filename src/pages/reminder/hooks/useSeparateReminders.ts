import { ReminderData } from "@/types/ReminderData"
import { DateUtils } from "@/utils"
import { useMemo } from "react"

interface Props {
    reminder: ReminderData[]
}
export const useSeparateReminders = ({reminder}: Props) => {
    const [activeReminders, expiredReminders] = useMemo(() => {
	if (!reminder.length) return [[], []]
		return [
			reminder.filter(rem => !DateUtils.isExpired(rem.date)),
			reminder.filter(rem => DateUtils.isExpired(rem.date))
		]
	}, [reminder])

  return {activeReminders, expiredReminders}
}
