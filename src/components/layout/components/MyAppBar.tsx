import { Typography } from '@mui/material'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'

import MenuButton from './MenuButton'

import { useIsPwaInstalled } from '@/hooks/useIsPwaInstalled'

const MyAppBar = () => {
  const isPwaInstalled = useIsPwaInstalled()
  return (
    <Box sx={{ flexGrow: 1, width: '100%' }}>
      <AppBar sx={{
        // width: '100%',
      }} position="static" >
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Turnos App
          </Typography>
          {!isPwaInstalled && <MenuButton/>}
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default MyAppBar