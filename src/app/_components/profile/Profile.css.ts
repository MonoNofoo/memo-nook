import { style } from '@vanilla-extract/css';
import { paperShadowStyle, tapeShape, vars } from '@src/styles/base.css';

export const container = style([
  paperShadowStyle,
  {
    margin: '15px 0 0',
    padding: '16px 8px',
    backgroundColor: vars.color.white,
  },
]);

export const showcaseWrap = style({
  containerType: 'inline-size',
});

export const showcase = style({
  display: 'grid',
  gridTemplateRows: '150px',
  gap: '16px',
  '@container': {
    '(width > 300px)': {
      display: 'grid',
      gridTemplateColumns: '150px 1fr',
    },
  },
});

export const tape = style([
  tapeShape,
  {
    backgroundImage: `repeating-linear-gradient(-45deg, ${vars.color.tapeBlue}, ${vars.color.tapeBlue} 10px, ${vars.color.white} 10px, ${vars.color.white} 20px)`,
  },
]);

export const image = style({
  width: '100%',
  height: '100%',
  padding: 8,
  borderRadius: '3px',
  boxShadow: '0 0 2px rgba(0,0,0,.2)',
  objectFit: 'contain',
});

export const list = style({
  margin: 0,
});

export const listTitle = style({
  fontWeight: 'bold',
  selectors: {
    '&:not(:first-child)': {
      marginTop: 16,
    },
  },
});

export const listData = style({
  margin: 0,
});
