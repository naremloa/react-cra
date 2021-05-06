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
  rules: {
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',
    // 方便封裝 UI 層使用
    'react/jsx-props-no-spreading': 'off',
  },
};
