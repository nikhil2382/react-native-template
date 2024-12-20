module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          actions: './src/actions',
          module: './src/module',
          navigation: './src/navigation',
          reducers: './src/reducers',
          sagas: './src/sagas',
          screens: './src/screens',
          utils: './src/utils',
        },
      },
    ],
  ],
};
