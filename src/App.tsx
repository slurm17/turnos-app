import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AddContact, AddReminder, ListContact, NotFound, Reminder } from './pages'
import { Layout } from './components'
import ROUTES from '@/constants/routes'
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
