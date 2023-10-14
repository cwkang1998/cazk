import { buttonClasses } from '@mui/material/Button';
import { Theme } from '@mui/material/styles/createTheme';

import { color } from './color';

type ComponentsOverridesType = Pick<Theme, 'components'>;

export enum ButtonSize {
  small = 30,
  medium = 36,
  large = 44,
}

export const components: ComponentsOverridesType = {
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          fontSize: '12px',
          lineHeight: 1.5,
          fontWeight: 500,
        },
        '#root': {
          minHeight: '100vh',
          backgroundSize: '100% 100%',
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          padding: 0,
        },
      },
    },
    MuiButton: {
      defaultProps: {
        fullWidth: true,
      },
      styleOverrides: {
        root: {
          textTransform: 'unset',
          boxShadow: 'unset',
          lineHeight: 1.5,
          borderRadius: '10px',
          [`&.${buttonClasses.disabled}`]: {
            backgroundColor: '#9F9D99',
            color: '#fff',
            cursor: 'not-allowed',
            pointerEvents: 'auto',
          },
        },
        endIcon: {
          marginRight: 'unset',
        },
        containedPrimary: {
          color: '#fff',
        },
        containedSecondary: {
          color: color.yellowMain,
        },
        outlinedSecondary: {
          color: color.yellowMain,
          border: `1px solid ${color.yellowSecondary}`,
        },
        sizeSmall: {
          height: 30,
        },
        sizeMedium: {
          height: 36,
        },
        sizeLarge: {
          fontSize: 16,
          height: 44,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        elevation24: {
          boxShadow: 'unset',
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontWeight: 500,
          lineHeight: 1.5,
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          backgroundColor: '#000',
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: `1px solid ${color.spiltLineBorder}`,
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          verticalAlign: 'top',
        },
      },
    },
    MuiBackdrop: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
        },
      },
    },
  },
};
