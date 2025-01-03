import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.js'
import './index.css'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { theme } from './theme/global'
import PWABadge from './PWABadge.js'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
// import { esES } from '@mui/x-date-pickers/locales'
// import dayjs from 'dayjs'
import 'dayjs/locale/es'
// dayjs.locale('es')
// const customLocaleText = {
//   ...esES.components.MuiLocalizationProvider.defaultProps.localeText,
//   months: Array.from({ length: 12 }, (_, i) =>
//     new Date(0, i).toLocaleString('es-ES', { month: 'long' }).replace(/^\w/, (c) => c.toUpperCase())
//   ),
// }
ReactDOM.createRoot(document.getElementById('root')!).render(

  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <LocalizationProvider
        dateAdapter={AdapterDayjs}
        adapterLocale={'es'}
        // localeText={customLocaleText}
        // localeText={esES.components.MuiLocalizationProvider.defaultProps.localeText}
      >
        <App />
      </LocalizationProvider>
      <PWABadge />
    </ThemeProvider>
  </React.StrictMode>,
)
