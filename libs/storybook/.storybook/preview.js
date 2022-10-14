import { initialize, mswDecorator } from 'msw-storybook-addon';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

// Initialize MSW
initialize();

// Provide the MSW addon decorator globally
export const decorators = [mswDecorator];

export const parameters = {
  backgrounds: {
    default: 'Dark',
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
    viewports: INITIAL_VIEWPORTS,
  },
};
