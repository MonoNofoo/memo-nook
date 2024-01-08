import { style } from '@vanilla-extract/css';
import { vars } from '@src/styles/base.css';

export const container = style({
  height: 80,
  padding: 8,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: vars.color.white,
  boxShadow: '0 1px 8px rgba(0,0,0,.1)',
  top: 0,
  zIndex: '100',
});

export const titleLink = style({
  display: 'block',
  textDecoration: 'none',
  color: vars.color.fontDefault,
});

export const title = style({
  margin: 0,
  fontWeight: 'normal',
  fontSize: '5rem',
});
