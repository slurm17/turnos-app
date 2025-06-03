import { IconButton, ListItemIcon, ListItemText } from '@mui/material'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete'
import EventNoteIcon from '@mui/icons-material/EventNote'

import RMenu from './RMenu'
import RMenuItem from './RMenuItem'
import RListItem from './RListItem'

import { ReminderData } from '@/types/ReminderData'
import { useReminderStore } from '@/store'
import { useReminderMessage } from '@/hooks/reminder'

const ReminderCard = ({ name, phone, date, id }: ReminderData) => {
  const { fullDate, remainingDaysMessage } = useReminderMessage({ date })
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const deleteReminder = useReminderStore((state) => state.deleteReminder)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  const onDelete = () => {
    deleteReminder(id)
  }
  const handleClickSendMessage = (phone : string) => {
    return window.open(`https://wa.me/${phone}`)
  }

    return (
      <>
      <RListItem
        secondaryAction={
          <>
            <IconButton onClick={() => handleClickSendMessage(phone)} aria-label="comments">
              <WhatsAppIcon sx={{ fontSize: 32, color: '#4FCE5D' }} />
            </IconButton>
            <IconButton onClick={handleClick} sx={{ paddingLeft: 0, paddingRight: 0 }} edge="end" aria-label="comments">
              <MoreVertIcon sx={{ fontSize: 32 }} />
            </IconButton>
          </>
        }
      >
        <ListItemIcon>
          <EventNoteIcon fontSize='large' />
        </ListItemIcon>
        <ListItemText
          primary={`${name}`}
          secondary={`${phone} \n${fullDate} - ${remainingDaysMessage}`}
          sx={{ whiteSpace: 'pre-line' }}
        />
      </RListItem>
      <RMenu
        open={open}
        anchorEl={anchorEl}
        handleClose={handleClose}
      >
        <RMenuItem onClick={onDelete} text='Borrar' icon={DeleteIcon} />
      </RMenu>
      </>
    )
}

export default ReminderCard