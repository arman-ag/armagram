module.exports = {
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    node: true,
    es6: true,
    'jest/globals': true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier', 'prettier/react'],
  plugins: ['react', 'prettier', 'jest'],
  rules: {
    'no-restricted-imports': [
      'error',
      {
        patterns: ['*/*/*', '!@mui/material/test-utils/*'],
      },
    ],
  },
}
