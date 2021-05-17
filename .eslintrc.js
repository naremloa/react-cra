module.exports = {
  parserOptions: {
    project: './tsconfig.eslint.json',
  },
  env: {
    node: true,
    browser: true,
    'jest/globals': true,
  },
  extends: [
    'airbnb-typescript',
    'plugin:eslint-comments/recommended',
    'plugin:jest/recommended',
    'plugin:prettier/recommended',
  ],
  // https://emotion.sh/docs/@emotion/eslint-plugin
  plugins: ['@emotion'],
  rules: {
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',
    // 方便封裝 UI 層使用
    'react/jsx-props-no-spreading': 'off',
    // Emotion 11 codemod
    '@emotion/pkg-renaming': 'error',
    // Emotion 10 codemod
    // 不需要這個規則，在 babel 中統一處理
    // '@emotion/jsx-import': 'error',
    '@emotion/no-vanilla': 'error',
    '@emotion/import-from-emotion': 'error',
    '@emotion/styled-import': 'error',
  },
};
