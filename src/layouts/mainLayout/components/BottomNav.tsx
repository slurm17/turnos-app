import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material'
import { useLocation, useNavigate } from 'react-router-dom'

import { ListItemsNavData } from '../types/ListItemsNavData'

interface BottomNavProps {
  listItemsNav: ListItemsNavData[]
}

const BottomNav = ({ listItemsNav }: BottomNavProps) => {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  // Esto en caso de necesitar usar rutas anidadas
  // const getActiveValue = () => {
  //   if (pathname.startsWith('/profile')) {
  //     return '/profile'
  //   }
  //   return location.pathname
  // }
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
        value={pathname}
        onChange={(_e, newValue) => {
          navigate(newValue)
        }}
      >
        {listItemsNav.map(({ text, icon: Icon, navigateTo }, i) => (
          <BottomNavigationAction 
            key={i} 
            value={navigateTo}
            label={text} 
            icon={<Icon/>} 
          />
        ))}
      </BottomNavigation>
    </Paper>
  )
}

export default BottomNav