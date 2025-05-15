module.exports = {
  root: true,
  env: { 
    browser: true, 
    es2021: true,
    'vitest/globals': true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/typescript',
    'plugin:vitest/recommended'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: [
    'react-refresh',
    '@typescript-eslint',
    'import',
    'unused-imports',
    'vitest',
  ],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    "semi": ["error", "never"],
    "quotes": ["error", "single"],
    "object-curly-spacing": ["error", "always"],
    "space-infix-ops": "error",
    "key-spacing": [
      "error",
      {
        "beforeColon": false,
        "afterColon": true
      }
    ],
    // Elimina imports no usados
    'unused-imports/no-unused-imports': 'warn',
    // Ordena y agrupa imports
    'import/order': ['warn', {
      groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
      'newlines-between': 'always',
    }],
    // Permite funciones flecha anónimas en tests
    'vitest/no-identical-title': 'error',
    'vitest/no-disabled-tests': 'warn',
    'vitest/no-focused-tests': 'error',
  },
}
