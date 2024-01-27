import { style } from '@vanilla-extract/css';

export const outer = style({
  display: 'grid',
});

export const image = style({
  width: '100%',
  height: 300,
  objectFit: 'cover',
  gridRow: '1/2',
  gridColumn: '1/2',
});

export const text = style({
  margin: 0,
  gridRow: '1/2',
  gridColumn: '1/2',
  justifySelf: 'center',
  alignSelf: 'center',
  fontSize: '3rem',
  color: '#fff',
  fontWeight: 'bold',
});
