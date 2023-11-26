import { createGlobalTheme, globalStyle, style } from '@vanilla-extract/css';

export const vars = createGlobalTheme(':root', {
  color: {
    white: '#fff',
    tapeBlue: '#54b5ff',
    fontDefault: '#333',
    fontGray: '#999',
    outerBackground: '#fafafa',
  },
  shadow: {
    paper: '0 15px 10px rgba(0,0,0,.3)',
  },
  font: {
    default: `var(--font-m-plus-one)`,
  },
});

export const paperShadowStyle = style({
  position: 'relative',
  selectors: {
    '&::before, &::after': {
      zIndex: -1,
      position: 'absolute',
      content: '',
      bottom: '15px',
      width: '50%',
      top: '80%',
      boxShadow: vars.shadow.paper,
    },
    '&::before': {
      left: '10px',
      transform: 'rotate(-3deg)',
    },
    '&::after': {
      right: '10px',
      transform: 'rotate(3deg)',
    },
  },
});

globalStyle('html', {
  fontSize: '62.5%',
});

globalStyle('body', {
  backgroundColor: vars.color.outerBackground,
  lineHeight: 1.2,
  fontSize: '1.6rem',
  color: vars.color.fontDefault,
  fontFamily: vars.font.default,
});
