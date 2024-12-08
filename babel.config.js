module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          module: './src/module',
          navigation: './src/navigation',
          screens: './src/screens',
          utils: './src/utils',
        },
      },
    ],
  ],
};
