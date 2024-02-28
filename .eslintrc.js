module.exports = {
    plugins: [
        "import",
        "prettier"
    ],
    extends: [
        "airbnb/base",
        "prettier"
    ],
    ignorePatterns: ["node_modules", "public"],
    rules: {
        "prettier/prettier": 2,
        "no-unused-vars": 1,
        "no-unused-expressions": 1,
        "camelcase": 1,
        "import/no-extraneous-dependencies": 1
    },
    env: {
        node: true,
        es6: true
    }
};