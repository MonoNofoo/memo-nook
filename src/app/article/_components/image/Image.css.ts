import { style } from '@vanilla-extract/css';
import { vars } from '@src/styles/base.css';

export const image = style({
  maxWidth: '100%',
  margin: '8px 0',
  boxShadow: `0 0 1px ${vars.color.border}`,
});
