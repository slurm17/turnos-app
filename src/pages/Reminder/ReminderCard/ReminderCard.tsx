import { ListItemButton } from '@mui/material'
import { Reminder } from '@/types/Reminder'
import { ListItemShadow } from '@/styles/Shadow'
import { ReminderInfo, WhatsAppButton } from '@/components'
import { useReminderStore } from '@/store'
import DeleteButton from './DeleteButton'

const ReminderCard = ({ name, phone, date, id }: Reminder) => {
    const deleteReminder = useReminderStore((state) => state.deleteReminder)
    const handleClickSendMessage = () => {
      return window.open(`https://wa.me/${phone}`)
    }
    const onDelete = () => {
      deleteReminder(id)
    }  
    return (
      <ListItemShadow>
        <ListItemButton /*rowSpacing={.25} columnSpacing={1} */sx={{
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
        }}>
          <ReminderInfo name={name} phone={phone} date={date} />
          <WhatsAppButton text='Enviar mensaje' handleClick={handleClickSendMessage}/>
          <DeleteButton onDelete={onDelete}/>
        </ListItemButton>
      </ListItemShadow>
    )
}

export default ReminderCard