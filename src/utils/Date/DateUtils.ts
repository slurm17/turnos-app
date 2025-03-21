import dayjs, { Dayjs } from 'dayjs'

const DateUtils = {
  formatDDMMAAAA( date: Dayjs ){
      if (!dayjs.isDayjs(date)) 
        return 'date != :Dayjs'
      return date.format('DD/MM/YYYY')
    }
  }

export default DateUtils