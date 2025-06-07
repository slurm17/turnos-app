import React from 'react'
import ReactDOM from 'react-dom/client'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

import App from './App.js'
import { theme } from './theme/global.js'
import 'dayjs/locale/es'
import { updateThemeColor } from './utils/updateThemeColor'

updateThemeColor(theme.palette.primary.main)

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
    </ThemeProvider>
  </React.StrictMode>,
)
