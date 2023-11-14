import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ee1042",
    },
    secondary: {
      main: "#edf2ff",
    },
  },
  typography: {
    button: {
      textTransform: "none",
    },
  },
});

export default theme;
