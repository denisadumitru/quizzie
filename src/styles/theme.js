import { createTheme } from '@mui/material';

export const theme = createTheme({
  typography: {
    fontFamily: ['Montserrat', 'Helvetica Neue', 'Arial', 'sans-serif'].join(
      ','
    ),
    letterSpacing: '1.2em',
    button: {
      fontWeight: 700,
      fontSize: 16,
      textTransform: 'uppercase',
    },
  },
  palette: {
    primary: {
      main: '#fc5c7d',
      light: '#fc92a8',
      dark: '#872f41',
    },
    secondary: {
      main: '#6a82fb',
      light: '#8ea2fa',
      dark: '#364485',
    },
  },
});

theme.typography = {
  ...theme.typography,
  h4: {
    ...theme.typography.h4,
    fontWeight: 700,
    [theme.breakpoints.down('md')]: {
      fontSize: 20,
    },
  },
};
