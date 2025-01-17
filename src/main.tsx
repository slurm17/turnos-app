import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.js'
import './index.css'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { theme } from './theme/global'
import PWABadge from './PWABadge.js'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import 'dayjs/locale/es'
ReactDOM.createRoot(document.getElementById('root')!).render(

  <React.StrictMode>
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <LocalizationProvider
          dateAdapter={AdapterDayjs}
          adapterLocale={'es'}
          >
          <App />
        </LocalizationProvider>
        <PWABadge />
    </ThemeProvider>
  </React.StrictMode>,
)
