module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: ['standard', 'plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'import'],
  rules: {
    "no-useless-constructor": 0,
    'prettier/prettier': [
      'error',
      {
        printWidth: 120,
        tabWidth: 4,
        singleQuote: true,
        trailingComma: 'all',
        arrowParens: 'always',
        semi: true,
      },
    ],
    'import/order': [
      'error',
      {
        groups: [
          ['builtin', 'external'],
          ['internal'],
          ['index'],
          ['sibling', 'parent'],
        ],
        pathGroups: [
          {
            pattern: '**/*.module',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '**/*.service',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '**/*.controller',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '**/*.entity',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '**/*.interface',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '**/decorators/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '**/utils/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '**/validators/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '**/transformers/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '**/*.dto',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '**/*.enum',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '**/*.types',
            group: 'internal',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        'newlines-between': 'always',
      },
    ],
    'object-curly-newline': [
      'error',
      {
        ObjectExpression: { multiline: true, minProperties: 1 },
        ObjectPattern: { multiline: true, minProperties: 1 },
        ImportDeclaration: { multiline: true, minProperties: 1 },
        ExportDeclaration: { multiline: true, minProperties: 1 },
      },
    ],
    'newline-per-chained-call': [
      'error',
      {
        ignoreChainWithDepth: 1, // Allows single-line for shallow chains
      },
    ],
  },
  settings: {
    'import/parsers': {
      [require.resolve('@typescript-eslint/parser')]: ['.ts', '.tsx', '.d.ts'],
    },
  },
};
