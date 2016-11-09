module.exports = {

  "extends": "eslint:recommended",

  "parserOptions": {

    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {

      "impliedStrict": true
    }
  },

  "env": {

    "es6": true,
    "node": true,
    "mocha": true
  },

  "rules": {

    "no-unused-vars": "off",
    "no-console": "off",
    "no-undef": "off"
  }
}
