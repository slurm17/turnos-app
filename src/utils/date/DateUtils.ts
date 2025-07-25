import { Dayjs } from 'dayjs'

import dayjs from '../../dayjsConfig'

const getRemainingDaysCount = (date: Dayjs): number => {
  return date.diff(dayjs().startOf('day'), 'day')
}

const DateUtils = {
  formatDDMMAAAA( date: Dayjs ){
    return date.format('DD/MM/YYYY')
  },
  getRemainingDaysMessage(date: Dayjs): string {
    const daysRemaining = getRemainingDaysCount(date)
    if (this.isExpired(date)) return 'Vencido'
    if (daysRemaining === 0) return 'Hoy'
    if (daysRemaining === 1) return 'Mañana'
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