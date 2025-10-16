import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark", // or 'light'
    primary: {
      main: "#3e93fa", // Blue
      light: "#68b7f7",
      dark: "#0f172a",
      contrastText: "#fff",
    },
    secondary: {
      main: "#e93fff", // Purple
      light: "#e98bfa",
      dark: "#7b1fa2",
      contrastText: "#fff",
    },
    background: {
      default: "#0f172a", // Light gray background
      paper: "#1e293b", // White for cards/surfaces
    },
    text: {
      primary: "#f5f5f5", // Almost black
      secondary: "#757575", // Gray for secondary text
    },
    success: {
      main: "#57c45a", // Green for completed todos
    },
    error: {
      main: "#fd2b2b", // Red for delete actions
    },
    warning: {
      main: "#ff9d1d", // Orange for warnings
    },
  },
  typography: {
    fontFamily: ["Open Sans", "sans-serif"].join(","),
    // Default font sizes
    fontSize: 14,
    h1: {
      fontSize: "2.5rem",
      fontWeight: 500,
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 500,
    },
    h3: {
      fontSize: "1.75rem",
      fontWeight: 500,
    },
    h4: {
      fontSize: "1.5rem",
      fontWeight: 500,
    },
    h5: {
      fontSize: "1.25rem",
      fontWeight: 500,
    },
    h6: {
      fontSize: "1rem",
      fontWeight: 500,
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.5,
    },
    body2: {
      fontSize: "0.875rem",
      lineHeight: 1.43,
    },
    button: {
      textTransform: "none", // Keeps button text as-is (not ALL CAPS)
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
          padding: "8px 16px",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: "outlined",
      },
    },
  },
});

export default theme;
