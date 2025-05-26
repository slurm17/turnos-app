import { ListItemButton } from '@mui/material'

import DeleteButton from './DeleteButton'

import { ReminderData } from '@/types/ReminderData'
import { ListItemShadow } from '@/styles/Shadow'
import { ReminderInfo, WhatsAppButton } from '@/components'
import { useReminderStore } from '@/store'

const ReminderCard = ({ name, phone, date, id }: ReminderData) => {
    const deleteReminder = useReminderStore((state) => state.deleteReminder)

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
          <WhatsAppButton text='Enviar mensaje' phone={phone}/>
          <DeleteButton onDelete={onDelete}/>
        </ListItemButton>
      </ListItemShadow>
    )
}

export default ReminderCard