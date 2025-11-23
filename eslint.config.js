import neo from 'neostandard'
import prettier from 'eslint-config-prettier'
import typescriptEslint from '@typescript-eslint/eslint-plugin'

const neoConfig = neo({
  ts: true
})

export default [
  ...neoConfig,
  {
    plugins: {
      '@typescript-eslint': typescriptEslint
    },
    rules: {
      '@stylistic/comma-dangle': [
        'error',
        {
          arrays: 'never',
          objects: 'never',
          imports: 'never',
          exports: 'never',
          functions: 'never'
        }
      ],
      '@typescript-eslint/no-explicit-any': 'error',
      // 放宽一些过于严格的规则
      '@stylistic/lines-between-class-members': 'off',
      camelcase: 'off',
      '@stylistic/spaced-comment': 'off',
      'no-void': 'off',
      'object-shorthand': 'warn',
      'no-case-declarations': 'off'
    }
  },
  prettier
]
