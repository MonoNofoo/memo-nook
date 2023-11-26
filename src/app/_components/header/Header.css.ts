import { vars } from '@src/app/base.css';
import { keyframes, style, StyleRule } from '@vanilla-extract/css';

const timeline = 'scroll()';
const frame = (from: StyleRule, to: StyleRule) => ({
  '0%': from,
  '2%': to,
  '100%': to,
});
const fontSizeAnimation = keyframes(
  frame({ fontSize: '5rem' }, { fontSize: '2.8rem' }),
);
const heightAnimation = keyframes(frame({ height: 80 }, { height: 30 }));

export const container = style({
  padding: 8,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  backgroundColor: vars.color.white,
  boxShadow: '0 1px 8px rgba(0,0,0,.1)',
  position: 'sticky',
  top: 0,
  animationName: heightAnimation,
  animationTimeline: timeline,
});

export const title = style({
  margin: 0,
  fontWeight: 'normal',
  animationName: fontSizeAnimation,
  animationTimeline: timeline,
});
