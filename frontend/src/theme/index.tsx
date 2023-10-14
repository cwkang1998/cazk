import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material';
import { Theme } from '@mui/material/styles/createTheme';
import React from 'react';

import { color } from './color';
import { components } from './components';
import { palette } from './palette';

declare module '@mui/system/createTheme/createBreakpoints' {
  interface BreakpointOverrides {
    xs: false;
    sm: false;
    md: false;
    lg: false;
    xl: false;
    mobile: true;
    desktop: true;
  }
}

export type ThemeProps<T = any> = { theme: Theme } & T;

export const defaultTheme = createTheme({
  ...components,
  spacing: 10,
  palette: {
    ...palette,
  },
  color: {
    ...color,
  },
  typography: {
    fontSize: 12,
    fontFamily: ['SourceHanSansCN-Medium', 'SourceHanSansCN', '-apple-system', 'Roboto', 'sans-serif'].join(','),
  },
  breakpoints: {
    values: {
      mobile: 0,
      desktop: 960,
    },
  },
});

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Tip:  multi theme mode will set by your self
  return <MuiThemeProvider theme={defaultTheme}>{children}</MuiThemeProvider>;
}
