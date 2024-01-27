import { style } from '@vanilla-extract/css';
import { vars } from '@src/styles/base.css';

export const blockquote = style({
  margin: '16px 0 0',
  padding: '8px',
  borderLeft: `5px solid ${vars.color.fontGray}`,
  fontStyle: 'italic',
});
