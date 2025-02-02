import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material'
import { useState } from 'react'
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1'
import DateRangeIcon from '@mui/icons-material/DateRange'
import PersonIcon from '@mui/icons-material/Person'
import { useNavigate } from 'react-router-dom'
import * as ROUTES from '@/constants/routes'
const BottomNav = () => {
  const [value, setValue] = useState(0)
  const navigate = useNavigate()
  const pages = [ROUTES.REMINDER, ROUTES.CONTACT_LIST, ROUTES.CONTACT_ADD]

  return (
    <Paper
      component={'nav'}
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        display: { sm: 'none' }
      }}
      elevation={3}
    >
      <BottomNavigation
        sx={{
          position: 'sticky',
          width: '100%',
          bottom: 0
        }}
        showLabels
        value={value}
        onChange={(_e, newValue) => {
          setValue(newValue)
          navigate(pages[newValue])
        }}
      >
        <BottomNavigationAction label="Turnos" icon={<DateRangeIcon />} />
        <BottomNavigationAction label="Contactos" icon={<PersonIcon />} />
        <BottomNavigationAction label="Añadir" icon={<PersonAddAlt1Icon />} />
      </BottomNavigation>
    </Paper>
  )
}

export default BottomNav