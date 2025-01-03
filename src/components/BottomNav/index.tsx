import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material'
import { useEffect, useState } from 'react'

// interface Props {}
import RestoreIcon from '@mui/icons-material/Restore'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ArchiveIcon from '@mui/icons-material/Archive'
import { useNavigate } from 'react-router-dom'
const BottomNav = () => {
  const [value, setValue] = useState(0)
  const navigate = useNavigate()
  const pages = ['/', '/reminder', '/contacts']
  useEffect(() => {
    navigate(pages[value])
  }, [value])
  
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