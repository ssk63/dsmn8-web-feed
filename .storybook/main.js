module.exports = {
  stories: [],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    '@storybook/addon-actions',
  ], // uncomment the property below if you want to apply some webpack config globally
  // webpackFinal: async (config, { configType }) => {
  //   // Make whatever fine-grained changes you need that should apply to all storybook configs
  //   // Return the altered config
  //   return config;
  // },
  core: {
    builder: 'webpack5',
  },
  refs: {
    StoryBookDesignSystem: {
      title: 'Design System',
      url: 'https://5ccbc373887ca40020446347-yldsqjoxzb.chromatic.com',
    }
  },
};
