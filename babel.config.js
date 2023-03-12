module.exports = {
  presets: [
    ['module:metro-react-native-babel-preset'],
    '@babel/preset-typescript',
  ],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: ['.ts', '.tsx'],
        alias: [
          { '@assets': './assets/' },
          { '@navigation': './src/navigation/' },
          { '@providers': './src/providers/' },
          { '@service': './src/service/' },
          { '@screens': './src/screens/' },
          { '@styles': './src/styles/' },
          { '@utils': './src/utils/' },
          { '@components': './src/components/' },
          { '@layouts': './src/layouts/' },
        ],
      },
    ],
  ],
};
