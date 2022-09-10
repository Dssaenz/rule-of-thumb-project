const RULES = {
  OFF: 'off',
  WARN: 'warn',
  ERROR: 'error',
};

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript',
    'eslint-config-prettier',
  ],
  overrides: [
    {
      files: ['*.jsx', '*.tsx'],
      rules: {
        '@typescript-eslint/explicit-module-boundary-types': [RULES.OFF],
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json'],
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    'no-console': [RULES.WARN],
    'react/react-in-jsx-scope': RULES.OFF,
    quotes: [RULES.ERROR, 'single'],
    '@typescript-eslint/explicit-function-return-type': RULES.OFF,
    '@typescript-eslint/restrict-template-expressions': RULES.OFF,
    '@typescript-eslint/strict-boolean-expressions': RULES.OFF,
  },
};
