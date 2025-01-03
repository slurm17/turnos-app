import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Layout from './pages/Layout'
import AddContact from './pages/AddContact'
import AddReminder from './pages/AddReminder'

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path="/" element={<Home />} />
          <Route path="/reminder" element={<AddReminder />} />
          <Route path="/contacts" element={<AddContact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
