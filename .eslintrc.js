module.exports = {
  extends: [
    "react-app",
    "react-app/jest"
  ],
  rules: {
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'react/jsx-boolean-value': 'off',
    'react/jsx-closing-bracket-location': [1, { selfClosing: 'line-aligned', nonEmpty: 'after-props' }],
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/no-shadow': 'off',
    'jsx-quotes': [2, 'prefer-double'],
    'no-console': 'off',
    'import/no-anonymous-default-export': [
      'error',
      {
        allowObject: true,
        allowArray: true,
        allowArrowFunction: true,
        allowAnonymousClass: true,
        allowAnonymousFunction: true,
        allowCallExpression: true,
        allowLiteral: true,
      },
    ],
    'react/no-array-index-key': 'off', // 把index做key的warning关了
    'prettier/prettier': [
      'error',
      {
        printWidth: 200,
        tabWidth: 2,
        useTabs: false,
        semi: true,
        singleQuote: true,
        trailingComma: 'all',
        bracketSpacing: true,
        jsxBracketSameLine: true,
        arrowParens: 'avoid',
      },
    ],
    'max-len': [
      'error',
      {
        code: 200,
        tabWidth: 4,
        ignoreComments: true,
        ignoreTrailingComments: false,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      },
    ],
  },
  plugins: [ "prettier" ]
};
