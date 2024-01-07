import { style } from '@vanilla-extract/css';
import { paperShadowStyle, tapeShape, vars } from '@src/styles/base.css';

export const container = style([
  paperShadowStyle,
  {
    padding: '24px 16px',
    backgroundColor: vars.color.white,
    listStyle: 'none',
  },
]);

export const tapeColorName = [
  'pinkPlaid',
  'skyStripe',
  'yellowStripe',
  'greenDot',
  'purple',
] as const;
export const tape = style([
  tapeShape,
  {
    selectors: {
      [`&[data-color="${tapeColorName[0]}"]`]: {
        backgroundImage:
          `repeating-linear-gradient(90deg, transparent, transparent 8px, ${vars.color.tapePink} 8px, ${vars.color.tapePink} 16px),` +
          `repeating-linear-gradient(0deg, transparent, transparent 8px, ${vars.color.tapePink} 8px, ${vars.color.tapePink} 16px)`,
        backgroundPosition: '0 0, 0 4px',
      },
      [`&[data-color="${tapeColorName[1]}"]`]: {
        backgroundImage: `repeating-linear-gradient(-45deg, ${vars.color.tapeBlue}, ${vars.color.tapeBlue} 10px, ${vars.color.white} 10px, ${vars.color.white} 20px)`,
      },
      [`&[data-color="${tapeColorName[2]}"]`]: {
        backgroundImage: `repeating-linear-gradient(0deg, ${vars.color.tapeYellow}, ${vars.color.tapeYellow} 4px, ${vars.color.white} 4px, ${vars.color.white} 8px)`,
      },
      [`&[data-color="${tapeColorName[3]}"]`]: {
        backgroundImage:
          `repeating-linear-gradient(45deg, ${vars.color.tapeGreen}, ${vars.color.tapeGreen} 11px, transparent 11px, transparent 15px),` +
          `repeating-linear-gradient(-45deg, ${vars.color.tapeGreen}, ${vars.color.tapeGreen} 11px, transparent 11px, transparent 15px)`,
        backgroundPosition: '-4px,0,0,0',
      },
      [`&[data-color="${tapeColorName[4]}"]`]: {
        backgroundColor: vars.color.tapePurple,
      },
    },
  },
]);

export const link = style({
  display: 'block',
  textDecoration: 'none',
  color: vars.color.fontDefault,
});

export const title = style({
  margin: 0,
});

export const dateShowcase = style({
  marginTop: 16,
  display: 'flex',
  justifyContent: 'flex-end',
  fontSize: '1.2rem',
});

export const date = style({
  marginLeft: 8,
  textDecoration: 'none',
});
