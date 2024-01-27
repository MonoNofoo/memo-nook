import { style } from '@vanilla-extract/css';
import { blockquote } from '@src/app/article/_components/blockquote/Blockquote.css';

export const text = style({
  margin: '10px 0 0',
  selectors: {
    [`${blockquote} &:first-child`]: {
      margin: 0,
    },
  },
});
