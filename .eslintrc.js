module.exports = {
  extends: ['react-app', 'airbnb', 'plugin:prettier/recommended'],
  env: { jest: true },
  rules: {
    'react/jsx-one-expression-per-line': ["off"],
    'prettier/prettier': ['error', { trailingComma: 'es5', singleQuote: true }],
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['to'],
      },
    ],
    'no-shadow': ['warn'],
    /*Removed to support common pattern of named component export and default HOC export
    Example:
    export const MyComponent = () => {}
    export default connect()(MyComponent)

    See benmosher/eslint-plugin-import#544 for more info
    Commonly, the named export (without container) is used only in testing,
    and in all other files it's expected to import the HOC with the same name as the "inner" component*/
    'import/no-named-as-default': ['off'],
    "jsx-a11y/href-no-hash": "off",
    "react/destructuring-assignment": ["off"],
    "import/no-cycle": ["off"],
    "import/prefer-default-export": ["off"]
  },
  settings: {
    'import/resolver': { node: { paths: 'src/' } },
  },
};
