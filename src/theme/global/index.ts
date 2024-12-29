import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
  palette: {
    primary: {
      main: '#FF5733',
      // light: will be calculated from palette.primary.main,
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      main: '#E0C2FF',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          margin: 0,
          display: 'flex',
          placeItems: 'center',
          minWidth: '320px',
          minHeight: '100vh'
        },
        main: {
          padding: '2rem'
        },
        '#root': {
          display: 'flex',
          flexDirection: 'column',
          placeItems: 'center',
          textAlign: 'center',
          maxWidth: '1280px',
          margin: '0 auto',
          width: '100%'
        },
      },
    },
  },
})