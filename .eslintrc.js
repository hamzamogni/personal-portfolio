module.exports = {
    root: true,
    env: {
        node: true,
        browser: true,
        jest: true,
    },
    extends: ['plugin:vue/recommended', 'eslint:recommended', 'prettier', 'plugin:prettier/recommended'],
    rules: {
        'vue/component-name-in-template-casing': ['error', 'PascalCase'],
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    },
    globals: {
        $nuxt: true,
    },
    parserOptions: {
        parser: '@babel/eslint-parser',
        // requireConfigFile: false,
    },
}
