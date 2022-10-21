import { create } from '@storybook/theming';

const theme = {
  brandTitle: 'DSMN8 Storybook',
  brandUrl: 'https://dsmn8.com/',
  colorPrimary: '#e8550f',
  colorSecondary: '#e8550f',
};

export const lightTheme = create({
  base: 'light',
  brandImage:
    'https://dsmn8.com/wp-content/uploads/2019/05/DSMN8LOGO-CMYK-GRYORG-1-1.png',
  ...theme,
});

export const darkTheme = create({
  base: 'dark',
  brandImage:
    'https://dsmn8.com/wp-content/uploads/2018/06/DSMN8LOGO-CMYK-WHT_400px.png',
  ...theme,
});
