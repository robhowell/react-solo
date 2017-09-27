module.exports = {
  extends: ['standard', 'prettier', 'plugin:jest/recommended'],
  "parserOptions": {
    sourceType: 'module'
  },
  plugins: ['prettier', 'jest'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true
      }
    ]
  },
  'env': {
    'jest/globals': true
  }
};
