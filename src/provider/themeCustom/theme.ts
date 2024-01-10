import { createTheme } from "@mui/material";
import { Poppins } from "next/font/google";

const inter = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const theme = createTheme({
  palette: {
    primary: {
      main: "#dc2626",
    },
    secondary: {
      main: "#edf2ff",
    },
  },
  typography: {
    button: {
      textTransform: "none",
    },
    fontFamily: inter.style.fontFamily,
  },
});

export default theme;
