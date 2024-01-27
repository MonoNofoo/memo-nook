import { style } from '@vanilla-extract/css';

export const text = style({
  height: 30,
  width: 100,
  display: 'inline-block',
  lineHeight: 'calc(30/14)',
  fontSize: '14px',
  textAlign: 'center',
  backgroundColor: '#e4fdff',
});
