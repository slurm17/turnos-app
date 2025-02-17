import { Box } from '@mui/material'
import { Outlet } from 'react-router-dom'
import { listItemsNav } from './constants/listItemsNav'
import DrawerNav from './DrawerNav'
import BottomNav from './BottomNav'

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