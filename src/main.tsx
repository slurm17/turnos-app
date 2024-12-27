import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.js'
import './index.css'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { theme } from './theme/global'
import PWABadge from './PWABadge.js'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
      <PWABadge />
    </ThemeProvider>
  </React.StrictMode>,
)
