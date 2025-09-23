// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  {
    // Global ignores
    ignores: [
      '**/dist',
      '**/node_modules',
      '**/.output',
      '**/.nuxt',
      '**/logs',
      '**/coverage',
      '**/*.min.js',
      '**/public',
      '**/temp'
    ]
  },
  
  // Vue.js specific rules
  {
    files: ['**/*.vue'],
    rules: {
      'vue/max-attributes-per-line': 'off',
      'vue/no-v-html': 'warn',
      'vue/require-prop-types': 'error',
      'vue/require-default-prop': 'off',
      'vue/multi-word-component-names': 'off', 
      'vue/no-unused-vars': 'error',
      'vue/component-name-in-template-casing': ['error', 'PascalCase'],
      'vue/html-self-closing': ['error', {
        html: {
          void: 'always',
          normal: 'always',
          component: 'always'
        }
      }]
    }
  },
  
  // TypeScript specific rules
  {
    files: ['**/*.ts', '**/*.vue'],
    rules: {
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/prefer-ts-expect-error': 'error',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-var-requires': 'error',
      '@typescript-eslint/ban-ts-comment': 'warn',
      '@typescript-eslint/prefer-as-const': 'error',
      '@typescript-eslint/consistent-type-imports': 'error'
    }
  },
  
  // General code quality rules
  {
    rules: {
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      'prefer-const': 'error',
      'no-var': 'error',
      'object-shorthand': 'error',
      'prefer-template': 'error',
      'no-unused-vars': 'off',
      'import/order': ['error', {
        'groups': [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index'
        ],
        'newlines-between': 'always',
        'alphabetize': { 
          order: 'asc',
          caseInsensitive: true 
        }
      }]
    }
  },
  
  // Nuxt specific rules
  {
    files: ['**/pages/**/*.vue', '**/layouts/**/*.vue', '**/components/**/*.vue'],
    rules: {
      'vue/no-multiple-template-root': 'off',
      'vue/no-v-model-argument': 'off' 
    }
  },
  
  // Configuration files
  {
    files: ['*.config.js', '*.config.mjs', '*.config.ts'],
    rules: {
      'no-console': 'off',
      '@typescript-eslint/no-var-requires': 'off'
    }
  }
)