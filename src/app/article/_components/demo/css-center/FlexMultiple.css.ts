import { style } from '@vanilla-extract/css';

export const outer = style({
  padding: 16,
  backgroundColor: '#e4fdff',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 8,
  flexWrap: 'wrap',
});

export const box = style({
  height: 100,
  width: 100,
  backgroundColor: '#9bff9c',
});

export const outer2 = style({
  height: 300,
  backgroundColor: '#e4fdff',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 8,
  flexWrap: 'wrap',
});
