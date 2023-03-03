module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          assets: './src/assets',
          components: './src/components',
          constants: './src/constants',
          mocks: './src/mocks',
          models: './src/models',
          navigation: './src/navigation',
          providers: './src/providers',
          api: './src/api',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
