module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    "airbnb",
    "airbnb/hooks",
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh', 'prettier'],
  "rules": {
    "import/no-unresolved": 0,
    "react/jsx-filename-extension": [1, {
      "extensions": [
        ".ts",
        ".tsx"
      ]
    }],
    "prettier/prettier": [
      "error",
      {
        "singleQuote": true,
        "trailingComma": "all",
        "arrowParens": "avoid",
        "endOfLine": "auto"
      }
    ],
    "no-use-before-define": "off",
    "import/extensions": ["error", "never"],
    "react/prop-types": 0,
    "no-shadow": "off",
    "react/require-default-props": 0,
    "react/jsx-props-no-spreading": 0,
    "react-hooks/exhaustive-deps": 0,
    "import/prefer-default-export": 0,
    "global-require": 0,
    "react/style-prop-object": 0
  }
}