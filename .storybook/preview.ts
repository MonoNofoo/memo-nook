import type { Preview } from '@storybook/react';
import 'sanitize.css';
import '@src/styles/base.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'default',
      values: [
        {
          name: 'default',
          value: '#fcfcfc',
        },
      ],
    },
  },
};

export default preview;
