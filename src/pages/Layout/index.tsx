import BottomNav from '@/pages/Layout/components/BottomNav'
import { Box } from '@mui/material'
import { Outlet } from 'react-router-dom'
const Layout = () => {
  return (
    <>
      <Box component='main'>
        <Outlet/>
      </Box>
      <BottomNav/>
    </>
  )
}

export default Layout