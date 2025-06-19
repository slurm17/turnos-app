import { createTheme } from '@mui/material/styles'
const bktValues = {
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
      xs: bktValues.xs,
      sm: bktValues.sm,
      md: bktValues.md,
      lg: bktValues.lg,
      xl: bktValues.xl
    }
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          margin: 0,
          minWidth: '320px',
          minHeight: '100dvh',
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
        }
      },
    },
  },
}
)