import { style } from '@vanilla-extract/css';

export const outer = style({
  height: 300,
  backgroundColor: '#e4fdff',
  display: 'grid',
  placeContent: 'center',
});

export const box = style({
  height: 100,
  width: 100,
  backgroundColor: '#9bff9c',
});
