module.exports = {
  env: {
    es6: true,
    jest: true,
    node: true,
    es2022: true,
    browser: true,
    commonjs: true,
  },
  plugins: ['prettier'],
  extends: ['eslint:recommended', 'plugin:node/recommended', 'plugin:prettier/recommended'],
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false,
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: false,
    },
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  globals: {
    strapi: true,
  },
  rules: {
    'node/no-extraneous-require': 'off',
    'node/no-unsupported-features/es-syntax': 'off',
  },
};
