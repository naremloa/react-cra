const Webpackbar = require('webpackbar');
const CracoLessPlugin = require('craco-less');
const CracoAlias = require('craco-alias');
const path = require('path');
// const CircularDependencyPlugin = require('circular-dependency-plugin');

module.exports = {
  babel: {
    // 處理部分新功能和 production  的優化 https://emotion.sh/docs/babel
    plugins: ['@emotion'],
    presets: [
      [
        '@babel/preset-react',
        {
          runtime: 'automatic',
          // 替換成 emotion 版本的 jsx 處理 css prop  https://emotion.sh/docs/css-prop#babel-preset
          importSource: '@emotion/react',
        },
      ],
    ],
  },
  jest: {
    configure: {
      moduleNameMapper: {
        '^@/(.+)': '<rootDir>/src/$1',
      },
    },
  },
  webpack: {
    plugins: [
      new Webpackbar({
        name: 'react-cra',
        color: '#75cabe',
      }),
      // new CircularDependencyPlugin({
      //   exclude: /node_modules/,
      //   include: /src/,
      //   failOnError: true,
      //   allowAsyncCycles: false,
      //   cwd: process.cwd(),
      // }),
    ],
  },
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: 'tsconfig',
        tsConfigPath: path.resolve(__dirname, 'tsconfig.extend.json'),
      },
    },
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#75cabe' },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
