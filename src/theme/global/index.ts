import { createTheme } from '@mui/material/styles'
export const theme = createTheme({
  palette: {
    primary: {
      main: '#1126db',
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
          // placeItems: 'center',
          margin: 0,
          // display: 'flex',
          minWidth: '320px',
          minHeight: '100vh',
          // backgroundColor: 'yellow'
        },
        '#root': {
          maxWidth: '1280px',
          margin: '0 auto',
          width: '100%',
        },
        main: {
          display: 'flex',
          flexDirection: 'column',
          placeItems: 'center',
          textAlign: 'center',
          padding: '1.75rem 1rem 70px 1rem',
          width: '100%'
        },
      },
    },
  },
}
)