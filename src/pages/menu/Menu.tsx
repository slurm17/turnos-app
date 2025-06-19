
import { List } from '@mui/material'

import DrawerItem from '@/components/drawer/DrawerItem'
import { listItemsNav } from '@/constants/navigation/listItemsNav' 

const Menu = () => {

  return (
    <List sx={{
      padding: 0,
      '& li': { 
        padding: 0,
        '& .MuiListItemButton-root': {
          paddingLeft: 0
        }
      },
    }}>
      {listItemsNav.map((item, i) => (
        <DrawerItem key={i} text={item.text} icon={item.icon} navigateTo={item.navigateTo} />
      ))}
    </List>
  )
}

export default Menu