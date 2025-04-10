import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { AddContact, ListContact, NotFound, Reminder } from './pages'
import ROUTES from '@/constants/routes'
import { Layout } from '@/components'
function App() {

  return (
    <Router>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Navigate to={ROUTES.REMINDER} replace />} />
          <Route path={ROUTES.REMINDER} element={<Reminder />} />
          <Route path={ROUTES.CONTACT_LIST} element={<ListContact />} />
          <Route path={ROUTES.CONTACT_ADD} element={<AddContact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
