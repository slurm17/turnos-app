import { useReminderActions } from "@/hooks/useReminderActions"
import { useReminderStore } from "@/store"
import { DateUtils } from "@/utils"
import { useMemo } from "react"

const useReminder = () => {
    const actions = useReminderActions()
	const reminders = useReminderStore((state) => state.reminder)
    const [activeRemindersList, expiredRemindersList] = useMemo(() => {
        if (!reminders.length) return [[], []]
            return [
                reminders.filter(rem => !DateUtils.isExpired(rem.date)),
                reminders.filter(rem => DateUtils.isExpired(rem.date))
            ]
        }, [reminders])
	const hasReminders = !!reminders.length
    return {hasReminders, actions, activeRemindersList, expiredRemindersList}
}

export default useReminder