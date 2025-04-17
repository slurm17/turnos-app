import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { ContactAdd, Contacts, NotFound, Reminders } from './pages'
import ROUTES from '@/constants/routes'
import { Layout } from '@/components'
function App() {

  return (
    <Router>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Navigate to={ROUTES.REMINDER} replace />} />
          <Route path={ROUTES.REMINDER} element={<Reminders/>} />
          <Route path={ROUTES.CONTACTS} element={<Contacts/>} />
          <Route path={ROUTES.CONTACT_ADD} element={<ContactAdd/>} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
