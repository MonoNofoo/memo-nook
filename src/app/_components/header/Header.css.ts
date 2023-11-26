import { keyframes, style, StyleRule } from '@vanilla-extract/css';
import { vars } from '@src/styles/base.css';

const timeline = 'scroll()';
const frame = (from: StyleRule, to: StyleRule) => ({
  '0%': from,
  '2%': to,
  '100%': to,
});
const fontSizeAnimation = keyframes(
  frame({ fontSize: '5rem' }, { fontSize: '2.8rem' }),
);
const heightAnimation = keyframes(frame({ height: 80 }, { height: 40 }));

export const container = style({
  height: 80,
  padding: 8,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: vars.color.white,
  boxShadow: '0 1px 8px rgba(0,0,0,.1)',
  position: 'sticky',
  top: 0,
  animationName: heightAnimation,
  animationTimeline: timeline,
});

export const titleLink = style({
  display: 'block',
  textDecoration: 'none',
  color: vars.color.fontDefault,
});

export const title = style({
  margin: 0,
  fontWeight: 'normal',
  animationName: fontSizeAnimation,
  animationTimeline: timeline,
  fontSize: '5rem',
});
