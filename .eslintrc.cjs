module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: 12,
        sourceType: "module",
    },
    plugins: ["@typescript-eslint"],
    rules: {
        indent: ["error", 4],
        quotes: ["error", "double"],
        semi: ["error", "always"],
        "no-console": "warn",
        "comma-spacing": ["error", { before: false, after: true }],
        "semi-spacing": ["error", { before: false, after: true }],
        "object-curly-spacing": ["error", "always"],
        "key-spacing": ["error", { beforeColon: false }],
        "padded-blocks": ["error", "never"],
        "no-multiple-empty-lines": ["error", { max: 3 }],
        "lines-between-class-members": ["error", "always", { exceptAfterSingleLine: true }],
    },
};