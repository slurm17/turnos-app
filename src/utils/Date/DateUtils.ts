import { format } from 'date-fns'
import { Dayjs } from 'dayjs'

const DateUtils = {
    formatDDMMAAAA( date: Dayjs ){
       return format(date.toDate(), 'dd/MM/yyyy')
    }
  }

export default DateUtils