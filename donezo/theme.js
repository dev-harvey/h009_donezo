import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light', // or 'dark'
    primary: {
      main: '#1976d2', // Blue - customize this to your brand
      light: '#42a5f5',
      dark: '#1565c0',
      contrastText: '#fff',
    },
    secondary: {
      main: '#9c27b0', // Purple - customize this
      light: '#ba68c8',
      dark: '#7b1fa2',
      contrastText: '#fff',
    },
    background: {
      default: '#f5f5f5', // Light gray background
      paper: '#ffffff', // White for cards/surfaces
    },
    text: {
      primary: '#212121', // Almost black
      secondary: '#757575', // Gray for secondary text
    },
    success: {
      main: '#4caf50', // Green for completed todos
    },
    error: {
      main: '#f44336', // Red for delete actions
    },
    warning: {
      main: '#ff9800', // Orange for warnings
    },
  },
  typography: {
    // TODO: Update font here
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
    // Default font sizes
    fontSize: 14,
    h1: {
      fontSize: '2.5rem',
      fontWeight: 500,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 500,
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 500,
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 500,
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 500,
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 500,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.5,
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.43,
    },
    button: {
      textTransform: 'none', // Keeps button text as-is (not ALL CAPS)
      fontWeight: 500,
    },
  },
  shape: {
    borderRadius: 8, // Default border radius for components
  },
  spacing: 10, // Base spacing unit (1 = 8px, 2 = 16px, etc.)
  components: {
    // Customize default component styles
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '8px 16px',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: 'outlined',
      },
    },
  },
});

export default theme;