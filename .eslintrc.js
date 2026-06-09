module.exports = {
  extends: ['algolia', 'algolia/jest', 'algolia/react'],

  env: {
    es6: true,
  },

  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.d.ts'],
      },
    },
    react: {
      version: 'detect',
    },
  },

  rules: {
    'max-params': ['error', 10],
    'no-warning-comments': 'error',

    'import/no-commonjs': 'off',
  },

  overrides: [
    {
      files: ['*.spec.js', '*.spec.ts', '*.spec.tsx'],
      env: {
        jest: true,
      },
    },
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: 'module',
        warnOnUnsupportedTypeScriptVersion: false,
      },
      plugins: ['@typescript-eslint'],
      extends: ['plugin:@typescript-eslint/recommended'],
      rules: {
        'no-array-constructor': 'off',
        'no-unused-vars': 'off',
        'no-use-before-define': 'off',

        '@typescript-eslint/ban-ts-ignore': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/ban-types': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-member-accessibility': 'off',
        '@typescript-eslint/no-array-constructor': 'error',
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-use-before-define': 'off',
        '@typescript-eslint/no-unused-vars': 'error',
        'import/extensions': 'off',
        'no-undef': 'off',
        'prettier/prettier': 'off',
      },
    },
  ],
};
