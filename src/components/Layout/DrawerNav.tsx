import Drawer from '@mui/material/Drawer'
import Toolbar from '@mui/material/Toolbar'
import Divider from '@mui/material/Divider'
import DrawerItem from './DrawerItem'
import { ListItemsNav } from './types/ListItemsNav'
interface DrawerNavProps {
  listItemsNav : ListItemsNav[],
  // hidden: boolean
}
const drawerWidth = 240
const DrawerNav = ({ listItemsNav/*, ...props*/ } : DrawerNavProps) => {
  return (
      <Drawer
        // {...props}
        sx={{
          display: { xs: 'none', sm: 'block' },
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
        >
        <Toolbar />
        <Divider />
        {listItemsNav.map((item, i) => (
          <DrawerItem key={i} text={item.text} icon={item.icon} navigateTo={item.navigateTo} />
        ))}
    </Drawer>
  )
}

export default DrawerNav