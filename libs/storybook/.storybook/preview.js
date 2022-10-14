import { initialize, mswDecorator } from 'msw-storybook-addon';
import { setCompodocJson } from '@storybook/addon-docs/angular';
import docJson from '../documentation.json';

setCompodocJson(docJson);

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
};
