import { createTheme } from '@mui/material/styles'
const brkptsValues = {
  xs: 0,
  sm: 600,
  md: 950,
  lg: 1280,
  xl: 1920
}
const colorPrimaryMain = '#8413ee'
const colorSecondaryMain = '#f3f3f3'
export const theme = createTheme({
  palette: {
    primary: {
      main: colorPrimaryMain,
      // light: will be calculated from palette.primary.main,
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      main: colorSecondaryMain,
    },
  },
  breakpoints: {
    values: {
      xs: brkptsValues.xs,
      sm: brkptsValues.sm,
      md: brkptsValues.md,
      lg: brkptsValues.lg,
      xl: brkptsValues.xl
    }
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          margin: 0,
          minWidth: '320px',
          minHeight: '100vh',
          backgroundColor: colorSecondaryMain
        },
        '#root': {
          margin: '0 auto',
          width: '100%',
          display: 'flex',
        },
        '#container-main': {
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
        },
        main: {
          display: 'flex',
          flexDirection: 'column',
          textAlign: 'center',
          padding: '0.75rem 1rem 70px 1rem',
          width: '100%',
          maxWidth: brkptsValues.sm,
          gap: '.8rem'
        },
      },
    },
  },
}
)