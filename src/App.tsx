import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Reminder from './pages/Reminder'
import NotFound from './pages/NotFound'
import Layout from './pages/Layout'
import AddContact from './pages/AddContact'
import ListContact from './pages/ListContact'
import * as ROUTES from '@/constants/routes'
import AddReminder from './pages/AddReminder'
function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path={ROUTES.REMINDER} element={<Reminder />} />
          <Route path={ROUTES.REMINDER_ADD} element={<AddReminder />} />
          <Route path={ROUTES.CONTACT_LIST} element={<ListContact />} />
          <Route path={ROUTES.CONTACT_ADD} element={<AddContact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
