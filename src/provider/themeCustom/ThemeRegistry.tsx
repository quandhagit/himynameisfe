"use client";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./theme";

type DashboardLayoutProps = {
  children: React.ReactNode;
  options: {
    key: string;
    prepend: boolean;
  };
};

const ThemeRegistry: React.FC<DashboardLayoutProps> = (props) => {
  const { children } = props;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default ThemeRegistry;
