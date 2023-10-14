import React from 'react';

export const color = {
  textGray: '#9CA3AF',
  textDark: '#141316',
  yellowMain: '#F3B71E',
  yellowSecondary: '#483D24',
  cardBgGray: '#222127',
  graySecondary: '#36353B',
  spiltLineBorder: 'rgba(156, 163, 175, 0.1)',
  border: '#483D24',
  error: '#FA7777',
  green: '#4FDAB8',
};

declare module '@mui/material/styles/createTheme' {
  interface Theme {
    color: {
      textGray: React.CSSProperties['color'];
      textDark: React.CSSProperties['color'];
      yellowMain: React.CSSProperties['color'];
      yellowSecondary: React.CSSProperties['color'];
      cardBgGray: React.CSSProperties['color'];
      graySecondary: React.CSSProperties['color'];
      spiltLineBorder: React.CSSProperties['color'];
      border: React.CSSProperties['color'];
      error: React.CSSProperties['color'];
      green: React.CSSProperties['color'];
    };
  }
  interface ThemeOptions {
    color: {
      textGray: React.CSSProperties['color'];
      textDark: React.CSSProperties['color'];
      yellowMain: React.CSSProperties['color'];
      yellowSecondary: React.CSSProperties['color'];
      cardBgGray: React.CSSProperties['color'];
      graySecondary: React.CSSProperties['color'];
      spiltLineBorder: React.CSSProperties['color'];
      border: React.CSSProperties['color'];
      error: React.CSSProperties['color'];
      green: React.CSSProperties['color'];
    };
  }
}
