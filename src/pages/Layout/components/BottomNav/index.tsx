import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material'
import { useState } from 'react'
import RestoreIcon from '@mui/icons-material/Restore'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ArchiveIcon from '@mui/icons-material/Archive'
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
        <BottomNavigationAction label="Pendientes" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Agregar" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Contactos" icon={<ArchiveIcon />} />
      </BottomNavigation>
    </Paper>
  )
}

export default BottomNav