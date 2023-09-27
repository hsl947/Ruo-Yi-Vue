/*
 * @Author: Shaoli
 * @Date: 2023-09-10 22:01:38
 * @LastEditors: Shaoli
 * @LastEditTime: 2023-09-10 22:53:37
 * @Description: 请填写文件描述
 */
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-essential',
    'plugin:prettier/recommended',
    './.eslintrc-auto-import.json'
  ],
  overrides: [
    {
      env: {
        node: true
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script'
      }
    },
    {
      files: ['src/**/*.vue', 'src/**/*.js'],
      rules: { 'vue/multi-word-component-names': 'off' }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['vue'],
  rules: {
    indent: ['warn', 2, { SwitchCase: 1 }],
    quotes: ['warn', 'single'],
    semi: ['warn', 'never'],
    'no-unused-vars': 'off',
    'no-console': 'off',
    'no-debugger': 'off',
    'vue/no-mutating-props': 'off',
    'vue/require-valid-default-prop': 'off',
    'vue/valid-define-emits': 'off'
  },
  globals: {
    defineEmits: 'readonly'
  }
}
