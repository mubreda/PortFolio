/* eslint-disable linebreak-style */

import typographyVariants from './typographyVariants';

export const colors = {
  background: {
    light: {
      color: '#E5E5E5',
    },
    main: {
      color: '#FFFFFF',
    },
  },
  primary: {
    main: {
      color: '#0062FF',
      contrastText: '#FFFFFF',
    },
    light: {
      color: '#333840',
      contrastText: '#FFFFFF',
    },
  },
  secondary: {
    main: {
      color: '#2F3136',
      contrastText: '#FFFFFF',
    },
    light: {
      color: '#5F636D',
      contrastText: '#FFFFFF',
    },
  },
  tertiary: {
    main: {
      color: '#FFAD01',
      contrastText: '#FFFFFF',
    },
  },
  modes: {
    dark: {},
  },
};

export const breakpoints = {
  xs: 0,
  sm: 480,
  md: 768,
  lg: 992,
  xl: 1200,
};

export default {
  colors,
  typographyVariants,
  breakpoints,
  borderRadius: '8px',
  transition: '.7s ease',
  fontFamily: '\'Rubik\', sans-serif',
};
