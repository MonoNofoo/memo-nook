import { style } from '@vanilla-extract/css';

export const list = style({
  margin: '8px 0 0 20px',
  padding: 0,
  selectors: {
    '& &': {
      margin: 0,
      paddingLeft: 20,
    },
  },
});
