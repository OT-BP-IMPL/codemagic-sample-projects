{
  "env": {
    "browser": true,
    "es2021": true,
    "node": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:import/errors",
    "plugin:import/warnings"
  ],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 12,
    "sourceType": "module"
  },
  "plugins": [
    "react",
    "react-hooks",
    "jsx-a11y",
    "import",
    "react-native"
  ],
  "rules": {
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    "import/no-unresolved": "warn",
    "import/named": "warn",
    "import/default": "warn",
    "import/namespace": "warn",
    "import/no-duplicates": "warn",
    "jsx-a11y/anchor-is-valid": "warn",
    "jsx-a11y/alt-text": "warn"
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  }
}
