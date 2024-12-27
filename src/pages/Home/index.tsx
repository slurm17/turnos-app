import { Box } from '@mui/material'
import CardInfo from './components/CardInfo'


const Home = () => {
  const data = [
    { name: 'Antonio', phone: '3434486607' },
    { name: 'Juan', phone: '3434486607' },
    { name: 'María', phone: '3434486607' },
    { name: 'Pepe', phone: '3434486607' },
    { name: 'Sofía', phone: '3434486607' }
  ]
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
      maxWidth: '500px',
      width: '100%',
      margin: 'auto'
    }}>
      {data.map((contact, i) => 
        (<CardInfo key={i} {...contact} />)
      )}
    </Box>
  )
}

export default Home