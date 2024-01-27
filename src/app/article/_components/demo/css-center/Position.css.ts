import { style } from '@vanilla-extract/css';

export const outer = style({
  position: 'relative',
});

export const image = style({
  width: '100%',
  height: 300,
  objectFit: 'cover',
});

export const text = style({
  margin: 0,
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  fontSize: '3rem',
  color: '#fff',
  fontWeight: 'bold',
});
