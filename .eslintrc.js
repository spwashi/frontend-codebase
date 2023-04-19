module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  overrides: [],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint", "import"],
  settings: {
    react: { version: "detect" },
    "import/resolver": {
      typescript: {
        project: ".",
      },
    },
  },
  rules: {
    "@typescript-eslint/no-explicit-any": ["off"],
    "@typescript-eslint/no-unused-vars": [
      "error",
      { ignoreRestSiblings: true },
    ],
    "import/order": [
      "error",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
          "object",
          "type",
        ],
      },
    ],
    "import/no-restricted-paths": [
      "error",
      {
        zones: [
          {
            target: "./src/app/@junction",
            from: ["./src/app"],
            except: ["./@junction"],
            message: "The @junction folder should not depend on the client",
          },
        ],
      },
    ],
  },
};
