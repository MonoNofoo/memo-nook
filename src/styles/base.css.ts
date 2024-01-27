import { createGlobalTheme, globalStyle, style } from '@vanilla-extract/css';

/**
 * 変数
 */
export const vars = createGlobalTheme(':root', {
  color: {
    white: '#fff',
    tapeBlue: '#54b5ff',
    tapePink: '#ff8ce8',
    tapeYellow: '#ffd300',
    tapeGreen: '#49db3b',
    tapePurple: '#a733ff',
    fontDefault: '#333',
    fontGray: '#999',
    fontCode: '#0d9aaf',
    outerBackground: '#fafafa',
  },
  shadow: {
    paper: '0 15px 10px rgba(0,0,0,.3)',
  },
  font: {
    default: `var(--font-m-plus-one)`,
  },
});

/**
 * 貼り付けてる風な紙の影
 */
export const paperShadowStyle = style({
  position: 'relative',
  selectors: {
    '&::before, &::after': {
      zIndex: -1,
      position: 'absolute',
      content: '',
      bottom: '16px',
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

export const tapeShape = style({
  position: 'absolute',
  top: '-15px',
  left: '50%',
  height: 30,
  width: '30%',
  transform: 'translateX(-50%) rotate(-4deg)',
  opacity: 0.3,
  boxShadow: '0 0 5px rgba(0,0,0,.2)',
});

globalStyle('html', {
  fontSize: '62.5%',
});

globalStyle('body', {
  backgroundColor: vars.color.outerBackground,
  lineHeight: 1.4,
  height: '100vh',
  overflowY: 'auto',
  fontSize: '1.6rem',
  color: vars.color.fontDefault,
  fontFamily: vars.font.default,
});
