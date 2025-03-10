module.exports = {
    env: {
      browser: true,
      es2021: true,
    },
    extends: [
      'eslint:recommended',
      'plugin:vue/vue3-recommended'
    ],
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    plugins: ['vue'],
    rules: {
      'vue/multi-word-component-names': 'off', // 単一ワードのコンポーネント名を許可
      'no-unused-vars': 'warn', // 未使用の変数を警告
      'vue/html-self-closing': 'warn' // HTML の自己クローズを警告
    }
  };