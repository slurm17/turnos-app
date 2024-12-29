import { Box } from '@mui/material'
import CardInfo from './components/CardInfo'
import ContactPicker from '@/components/ContactPicker'


const Home = () => {
  const data = [
    { name: 'Sivana Del el Canal', phone: '3434486607', fecha: '2025-05-01' },
    { name: 'Juan Pablo Pérez Lorca', phone: '3434486607', fecha: '2025-05-01' },
    { name: 'María Soledad de las Nieves', phone: '3434486607', fecha: '2025-05-01' },
    { name: 'Pepe Mantel de las Acacias', phone: '3434486607', fecha: '2025-05-01' },
    { name: 'Sofía Mesa Sanchez Arriondo', phone: '3434486607' ,fecha: '2025-05-01' }
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
      <ContactPicker/>
    </Box>
  )
}

export default Home