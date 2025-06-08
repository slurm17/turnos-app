import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

import { ContactAdd, Contact, NotFound, Reminder, Menu } from './pages'
import { MainLayout } from './layouts'

import routes from '@/constants/routes'
function App() {

  return (
    <Router>
      <Routes>
        <Route element={<MainLayout/>}>
          <Route path="/" element={<Navigate to={routes.REMINDER} replace />} />
          <Route path={routes.REMINDER} element={<Reminder />} />
          <Route path={routes.CONTACT} element={<Contact />} />
          <Route path={routes.CONTACT_ADD} element={<ContactAdd />} />
          <Route path={routes.MENU} element={<Menu />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
