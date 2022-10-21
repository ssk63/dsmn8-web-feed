import { initialize, mswDecorator } from 'msw-storybook-addon';
import {
  MINIMAL_VIEWPORTS,
  INITIAL_VIEWPORTS,
} from '@storybook/addon-viewport';
import { darkTheme, lightTheme } from './dsmn8Theme';

// Initialize MSW
initialize();

// Provide the MSW addon decorator globally
export const decorators = [mswDecorator];

export const parameters = {
  backgrounds: {
    default: 'Light',
    values: [
      {
        name: 'Light',
        value: '#ffffff',
      },
      {
        name: 'Dark',
        value: '#333333',
      },
      {
        name: 'Skyblue',
        value: '#00aced',
      },
      {
        name: 'Blue',
        value: '#3b5998',
      },
    ],
  },
  viewport: {
    viewports: { ...MINIMAL_VIEWPORTS, ...INITIAL_VIEWPORTS },
  },
  darkMode: {
    dark: darkTheme,
    light: lightTheme,
    stylePreview: true,
    darkClass: 'd8-dark',
    lightClass: 'd8-light',
  },
};
