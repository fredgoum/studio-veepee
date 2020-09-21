module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
  },
  env: {
    node: true,
  },
  extends: [
    '@vue/airbnb',
    'plugin:vue/recommended',
  ],
  plugins: [
    'vuetify',
  ],
  // add your custom rules here
  rules: {
    'vuetify/no-deprecated-classes': 'error',
    'vuetify/grid-unknown-attributes': 'error',
    'vuetify/no-legacy-grid': 'error',
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    //CUSTOM
    //end of lines windows / unix
    'linebreak-style': 'off',
    quotes: 'off',
    'space-unary-ops': [2, {
      "words": true,
      "nonwords": false,
      "overrides": {
        "!": true
      }
    }],
    'max-len': ['error', 200],
    'no-plusplus': "off",
    'no-mixed-operators': ['error', {
      groups: [
        // ['+', '-', '*', '/', '%', '**'],
        ['&', '|', '^', '~', '<<', '>>', '>>>'],
        ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
        // ['&&', '||'],
        ['in', 'instanceof']
      ],
      allowSamePrecedence: false
    }],
    'object-curly-newline': ['error', {
      ObjectExpression: { minProperties: 6, multiline: true, consistent: true },
      ObjectPattern: { minProperties: 6, multiline: true, consistent: true }
    }],
    'no-param-reassign': ["error", { "props": false }],
    indent: 'off',
    'template-curly-spacing': 'off',
    eqeqeq: 'off', //SEE TO ACTIVATE THAT LATER
    'func-names': 'off',
    'arrow-parens': ["error", "as-needed", { "requireForBlockBody": true }],

    //imports
    'import/extensions': 'off',
    'import/no-unresolved': 'off',

    //eslint-plugin-vue rules
    'vue/script-indent': ["error", 2, {"baseIndent": 1}],
    'vue/max-attributes-per-line': 'off',
    'vue/require-v-for-key': 'off',
    "vue/no-use-v-if-with-v-for": ["error", {
      "allowUsingIterationVar": true,
    }],
    "vue/singleline-html-element-content-newline": 'off',
    "vue/html-closing-bracket-newline": ["error", {
      "singleline": "never",
      "multiline": "never"
    }],
    "vue/html-self-closing": ["error", {
      "html": {
        "void": "never",
        "normal": "never",
        "component": "never"
      }
    }],
  },
  globals: {
    moment: true,
    '$': true,
    angular: true,
    '_': true,
  }
}
