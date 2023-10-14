import { PaletteOptions } from '@mui/material/styles/createPalette';

import { color } from './color';

export const palette: PaletteOptions = {
  primary: {
    main: color.yellowMain,
  },
  secondary: {
    main: color.yellowSecondary,
  },
  text: {
    primary: color.textGray,
    secondary: color.textDark,
  },
  // info: {
  //   main: ''
  // },
  // warning: {
  //   main: ''
  // },
  error: {
    main: color.error,
  },
  success: {
    main: color.green,
  },
};
