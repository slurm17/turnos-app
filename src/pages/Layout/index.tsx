import BottomNav from '@/pages/Layout/components/BottomNav'
import { Box } from '@mui/material'
import { Outlet } from 'react-router-dom'
import DrawerNav from './components/DrawerNav'
import { listItemsNav } from './types/ListItemsNav'

const Layout = () => {
  return (
    <>
      <DrawerNav listItemsNav={listItemsNav}/>
      <Box component='main'>
        <Outlet/>
      </Box>
      <BottomNav listItemsNav={listItemsNav}/>
    </>
  )
}

export default Layout