import { createGlobalTheme, globalStyle } from '@vanilla-extract/css';

export const vars = createGlobalTheme(':root', {
  color: {
    white: '#fff',
    fontDefault: '#333',
    fontGray: '#999',
    outerBackground: '#fafafa',
  },
  font: {
    default: `var(--font-m-plus-one)`,
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
