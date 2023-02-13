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
          models: './src/models',
          navigation: './src/navigation',
          providers: './src/providers',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
