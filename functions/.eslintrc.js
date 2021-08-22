module.exports = {
  root: true,
  env: {
    es6: true,
    node: true, commonjs: true,
    es2020: true,
  },
  globals: {
    config: true,
  },
  parserOptions: {
    ecmaVersion: 2021,
  },
  extends: ['eslint:recommended', 'google'],
  rules: {
    // 'arrow-spacing': {before: true, after: true},
    // 'arrow-body-style': ['error', 'always'],
    'max-len': [2, 120],
    'no-plusplus': 'off',
    'object-curly-newline': 'off',
    'no-underscore-dangle': 0,
    'no-unused-vars': [
      'error',
      {
        argsIgnorePattern: 'next',
        varsIgnorePattern: 'debug',
      },
    ],
    'semi': [2, 'never'],
    'quotes': ['error', 'single'],
    'indent': ['error', 2],
    'no-multi-spaces': ['error'],
  },
}
