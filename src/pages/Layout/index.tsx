import BottomNav from '@/pages/Layout/components/BottomNav'
import { Box } from '@mui/material'
import { Outlet } from 'react-router-dom'
const Layout = () => {
  return (
    <>
      <Box component='main' sx={{
        // marginBottom: { xs: '56px', sm: '0px' },
      }}>
        <Outlet/>
      </Box>
      <BottomNav/>
    </>
  )
}

export default Layout