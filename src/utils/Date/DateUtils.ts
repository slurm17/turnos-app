import { Dayjs } from 'dayjs'
import dayjs from '@/dayjsConfig'

const DateUtils = {
  formatDDMMAAAA( date: Dayjs ){
      if (!dayjs.isDayjs(date)) 
        return 'date != :Dayjs'
      return date.format('DD/MM/YYYY')
    },
  getRemainingDays(date: Dayjs) {
    const daysRemaining = date.diff(dayjs().startOf('day'), 'day')
      if (daysRemaining === 0) return 'Hoy'
      if (daysRemaining < 0) return 'El recordatorio ya pasó.'
      return `${daysRemaining} días`
  },
  getfullDate(date: Dayjs){
    return date.format('ddd D MMM')
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
  },
  isExpired(date: Dayjs) {
    return date.isBefore(dayjs(), 'day')
  }
}

export default DateUtils