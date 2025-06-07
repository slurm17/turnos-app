module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  globals: {
    vi: 'readonly',
    describe: 'readonly',
    it: 'readonly',
    expect: 'readonly',
    beforeEach: 'readonly',
    afterEach: 'readonly',
    beforeAll: 'readonly',
    afterAll: 'readonly',
    test: 'readonly',
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/typescript',
    'plugin:react/recommended'

  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: [
    'react',
    'react-refresh',
    '@typescript-eslint',
    'import',
    'unused-imports',
    'vitest',
  ],
  settings: {
    react: {
      version: 'detect'
    }
  },
  rules: {
    "react/jsx-indent": ["error", 2],
    "react/jsx-indent-props": ["error", 2],
    "indent": ["error", 2, {
      "SwitchCase": 1,
      "ignoredNodes": ["JSXElement *", "JSXElement"],
      "outerIIFEBody": 0
    }],
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    '@typescript-eslint/semi': ['error', 'never'],
    'quotes': ['error', 'single'],
    'object-curly-spacing': ['error', 'always'],
    'space-infix-ops': 'error',
    'react/react-in-jsx-scope': 'off',
    'key-spacing': [
      'error',
      {
        beforeColon: false,
        afterColon: true,
      },
    ],
    'unused-imports/no-unused-imports': 'warn',
    'import/order': [
      'warn',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        'newlines-between': 'always',
      },
    ],
    'vitest/no-identical-title': 'error',
    'vitest/no-disabled-tests': 'warn',
    'vitest/no-focused-tests': 'error',
  },
}
