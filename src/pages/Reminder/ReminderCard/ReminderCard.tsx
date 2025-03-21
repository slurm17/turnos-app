import { ListItemButton } from '@mui/material'
import { Reminder } from '@/types/Reminder'
import { ListItemShadow } from '@/styles/Shadow'
import { ReminderInfo, WhatsAppButton } from '@/components'

const ReminderCard = ({ name, phone, date }: Reminder) => {
    const handleClickSendMessage = () => {
      return window.open(`https://wa.me/${phone}`)
    }
    return (
      <ListItemShadow>
        <ListItemButton /*rowSpacing={.25} columnSpacing={1} */sx={{
          display: 'flex',
          flexDirection: 'column'
        }}>
          <ReminderInfo name={name} phone={phone} date={date} />
          <WhatsAppButton text='Enviar mensaje' handleClick={handleClickSendMessage}/>
        </ListItemButton>
      </ListItemShadow>
    )
}

export default ReminderCard