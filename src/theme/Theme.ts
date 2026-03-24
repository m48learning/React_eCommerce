// theme.js
import { createTheme } from "@mui/material/styles";

const AppTheme = createTheme({
  palette: {
    primary: {
      main: "#1976d2"
    },
    secondary: {
      main: "#9c27b0"
    },
    background: {
      default: "#f5f5f5"
    }
  },
  typography: {
    fontFamily: "Roboto, Arial",
    h1: {
      fontSize: "2rem"
    }
  }
});

export default AppTheme;