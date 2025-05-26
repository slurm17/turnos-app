import { useMemo } from 'react'

import { useReminderActions } from '@/hooks/reminder'
import { useReminderStore } from '@/store'
import { DateUtils } from '@/utils'

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
    return { hasReminders, actions, activeRemindersList, expiredRemindersList }
}

export default useReminder