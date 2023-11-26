import { style } from '@vanilla-extract/css';
import { paperShadowStyle, vars } from '@src/styles/base.css';

export const container = style([
  paperShadowStyle,
  {
    margin: 15,
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

export const tape = style({
  position: 'absolute',
  top: '-15px',
  left: '50%',
  height: 30,
  width: '30%',
  backgroundImage: `repeating-linear-gradient(-45deg, ${vars.color.tapeBlue}, ${vars.color.tapeBlue} 10px, ${vars.color.white} 10px, ${vars.color.white} 20px)`,
  transform: 'translateX(-50%) rotate(-4deg)',
  opacity: 0.3,
  boxShadow: '0 0 5px rgba(0,0,0,.2)',
});

export const image = style({
  width: '100%',
  height: '100%',
  border: '2px solid #eee',
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
