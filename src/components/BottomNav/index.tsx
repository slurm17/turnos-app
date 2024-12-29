import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material'
import { useState } from 'react'

// interface Props {}
import RestoreIcon from '@mui/icons-material/Restore'
// import FavoriteIcon from '@mui/icons-material/Favorite'
import ArchiveIcon from '@mui/icons-material/Archive'
const BottomNav = () => {
  const [value, setValue] = useState(0)
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
        onChange={(event, newValue) => {
          console.log('🚀 ~ BottomNav ~ newValue:', event)
          setValue(newValue)
        }}
      >
        <BottomNavigationAction label="Home" icon={<RestoreIcon />} />
        {/* <BottomNavigationAction label="Añadir recordatorio" icon={<FavoriteIcon />} /> */}
        <BottomNavigationAction label="Contactos" icon={<ArchiveIcon />} />
      </BottomNavigation>
    </Paper>
  )
}

export default BottomNav