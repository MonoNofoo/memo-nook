import { style } from '@vanilla-extract/css';
import { pre } from '@src/app/article/_components/preformatted-text/PreformattedText.css';
import { vars } from '@src/styles/base.css';

export const code = style({
  padding: '2px 4px',
  borderRadius: 4,
  border: `1px solid ${vars.color.fontCode}`,
  backgroundColor: '#eaf9ff',
  color: vars.color.fontCode,

  selectors: {
    [`${pre} &`]: {
      backgroundColor: 'transparent',
      border: 'none',
      color: '#fdfdfd',
    },
  },
});
