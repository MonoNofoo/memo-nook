import { style } from '@vanilla-extract/css';

export const container = style({
  margin: '24px 0 0',
  padding: '0',
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',

  gap: '24px 8px',
  '@media': {
    'screen and (max-width: 600px)': {
      gridTemplateColumns: '1fr',
    },
  },
});
