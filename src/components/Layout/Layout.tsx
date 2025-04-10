import { Box } from '@mui/material'
import { Outlet } from 'react-router-dom'
import { listItemsNav } from './constants/listItemsNav'
import DrawerNav from './components/DrawerNav'
import BottomNav from './components/BottomNav'


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