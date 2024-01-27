import { style } from '@vanilla-extract/css';
import { vars } from '@src/styles/base.css';

export const container = style({
  padding: 16,
  borderRadius: '10px',
  border: `1px solid ${vars.color.border}`,
  backgroundColor: vars.color.white,
});

export const inner = style({
  borderRadius: '6px',
  overflow: 'hidden',
});
