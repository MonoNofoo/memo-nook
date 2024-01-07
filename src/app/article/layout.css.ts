import { style } from '@vanilla-extract/css';
import { vars } from '@src/styles/base.css';

export const container = style({
  maxWidth: 1000,
  margin: '24px auto 0',
  padding: 24,
});

export const article = style({
  padding: '8px 16px',
  backgroundColor: vars.color.white,
  position: 'relative',
  boxShadow: '0 3px 5px rgba(0,0,0,.1)',
});

export const tape = style({
  height: 30,
  width: 60,
  display: 'inline-block',
  backgroundImage:
    `repeating-linear-gradient(45deg, ${vars.color.tapeBlue}, ${vars.color.tapeBlue} 11px, transparent 11px, transparent 15px),` +
    `repeating-linear-gradient(-45deg, ${vars.color.tapeBlue}, ${vars.color.tapeBlue} 11px, transparent 11px, transparent 15px)`,
  backgroundPosition: '-4px,0,0,0',
  position: 'absolute',
  opacity: 0.3,

  selectors: {
    '&[data-position="topLeft"]': {
      top: -10,
      left: -25,
      transform: 'rotate(-45deg)',
    },
    '&[data-position="topRight"]': {
      top: -10,
      right: -25,
      transform: 'rotate(45deg)',
    },
    '&[data-position="bottomLeft"]': {
      bottom: -10,
      left: -25,
      transform: 'rotate(45deg)',
    },
    '&[data-position="bottomRight"]': {
      bottom: -10,
      right: -25,
      transform: 'rotate(-45deg)',
    },
  },
});
