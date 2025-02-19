import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.js'
import PWABadge from './PWABadge.js'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { theme } from './theme/global.js'
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
