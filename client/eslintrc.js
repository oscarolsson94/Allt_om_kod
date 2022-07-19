module.exports = {
    extends: [
        'airbnb-typescript',
        'airbnb/hooks',
        'plugin:@typescript-eslint/recommended',
        'plugin:jest/recommended',
        'plugin:prettier/recommended',
    ],
    plugins: ['react', '@typescript-eslint', 'jest'],
    env: {
        browser: true,
        es6: true,
        jest: true,
    },
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: 'module',
        project: './tsconfig.json',
    },
    rules: {
        'linebreak-style': 0,
        'react/function-component-definition': 0,
        '@typescript-eslint/explicit-function-return-type': 0,
        'react/jsx-props-no-spreading': 0,
        'react/require-default-props': 0, // might want to implement later
        'arrow-parens': ['error', 'as-needed'],
        'import/prefer-default-export': ['off'], // we might want to implement this later
        '@typescript-eslint/no-use-before-define': 0, // should implement this later
        'no-useless-escape': 0, // should implement, but need a bit refactoring and testing
        'react/destructuring-assignment': 0, // should implement
        'react/no-array-index-key': ['warn'],
        'react/jsx-no-useless-fragment': 0, // should look into, but now its buggy with maps
        'react-hooks/exhaustive-deps': ['warn'], // we should REALLY use this
        '@typescript-eslint/no-empty-interface': 0, // good warning, but generated types are wack
        '@typescript-eslint/ban-ts-comment': ['warn'],
        '@typescript-eslint/naming-convention': ['warn'], // should implement
        'prefer-regex-literals': 0,
        'consistent-return': 0, // should probably implement
        'no-nested-ternary': 'warn',
        '@typescript-eslint/no-shadow': 'warn',
        '@typescript-eslint/no-unused-expressions': 'warn',
        'no-plusplus': 0,
        'no-promise-executor-return': 0,
        'no-unused-vars': 0,
        'prefer-promise-reject-errors': 0,
        'prefer-destructuring': 'warn',
        '@typescript-eslint/no-unused-vars': 0,
        'no-throw-literal': 0,
        '@typescript-eslint/no-throw-literal': 0,
        'import/no-cycle': 'warn',
        'unused-imports/no-unused-imports': 'error',
        'unused-imports/no-unused-vars': [
            'warn',
            {
                vars: 'all',
            },
        ],
        'max-len': [
            'warn',
            {
                code: 120,
                tabWidth: 4,
            },
        ],
        'jsx-a11y/anchor-is-valid': [
            // Check that <a> contains the right attributes
            'error',
            {
                components: ['Link'],
                specialLink: ['to', 'hrefLeft', 'hrefRight'],
                aspects: ['noHref', 'invalidHref', 'preferButton'],
            },
        ],
        'import/order': [
            'warn',
            {
                groups: ['external', 'internal'],
                pathGroups: [
                    {
                        pattern: 'react+(|-dom|-router|-router-dom|-i18next)',
                        group: 'external',
                        position: 'before',
                    },
                    {
                        pattern: 'pages/**',
                        group: 'internal',
                        position: 'before',
                    },
                    {
                        pattern: 'types/**',
                        group: 'internal',
                        position: 'before',
                    },
                    {
                        pattern: 'queries/**',
                        group: 'internal',
                        position: 'before',
                    },
                    {
                        pattern: 'routes/**|routes',
                        group: 'internal',
                        position: 'before',
                    },
                    {
                        pattern: 'components/**',
                        group: 'internal',
                        position: 'after',
                    },
                    {
                        pattern: 'utils/**',
                        group: 'internal',
                        position: 'after',
                    },
                ],
                pathGroupsExcludedImportTypes: ['react'],
                'newlines-between': 'never',
                alphabetize: {
                    order: 'asc',
                    caseInsensitive: true,
                },
            },
        ],
    },
};
