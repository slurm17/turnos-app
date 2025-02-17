import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Reminder from './pages/Reminder/Reminder'
import NotFound from './pages/NotFound/NotFound'
import Layout from './components/Layout/Layout'
import AddContact from './pages/AddContact/AddContact'
import ListContact from './pages/ListContact/ListContact'
import * as ROUTES from '@/constants/routes'
import AddReminder from './components/AddReminder'
function App() {

  return (
    <Router>
      <Routes>
        <Route element={<Layout/>}>
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
