import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ListItemsNav } from '../../types/ListItemsNav'
interface BottomNavProps {
  listItemsNav: ListItemsNav[]
}
const BottomNav = ({ listItemsNav }:BottomNavProps) => {
  const [value, setValue] = useState(0)
  const navigate = useNavigate()
  const pages : string[] = []
  pages.push(...listItemsNav.map((item) => (item.navigateTo)))

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
        {listItemsNav.map(({ text, icon: Icon }, i) => (
          <BottomNavigationAction 
            key={i} 
            label={text} 
            icon={<Icon/>} 
          />
        ))}
      </BottomNavigation>
    </Paper>
  )
}

export default BottomNav