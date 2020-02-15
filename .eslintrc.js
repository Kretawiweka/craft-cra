module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    'react/prop-types': [
      0,
      { ignore: true, customValidators: false, skipUndeclared: true }
    ],
    'react/destructuring-assignment': [0, 'always'],
    quotes: [2, 'single', { avoidEscape: true }]
  }
};
