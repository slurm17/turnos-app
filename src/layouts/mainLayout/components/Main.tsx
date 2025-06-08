import { Box } from '@mui/material'

interface MainProps {
    children: React.ReactNode,
    isPwaInstalled: boolean
}

const Main = ({ children, isPwaInstalled }: MainProps) => {
  return (
    <Box 
      component={'main'}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        padding: `0.75rem 1rem ${isPwaInstalled ? '70px' : '0px'} 1rem`,
        width: '100%',
        maxWidth: 'sm',
        gap: '.8rem'
      }}
    >
      {children}
    </Box>
  )
}

export default Main