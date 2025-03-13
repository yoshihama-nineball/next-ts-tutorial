module.exports = {
  // 既存の設定を維持...

  // 追加：テストファイル用の特別ルール
  overrides: [
    {
      files: ['**/*.test.ts', '**/*.test.tsx', '**/__tests__/**/*'],
      rules: {
        // テストファイルではReactフックのルールを緩和
        'react-hooks/rules-of-hooks': 'off',
        // テスト中は型を厳密にチェックしない
        '@typescript-eslint/no-explicit-any': 'off',
        // テスト中はJSXでのpropsの検証を緩和
        'react/prop-types': 'off',
        // テストではimportの順序を厳密にチェックしない
        'import/order': 'off',
        // モックやテスト用の変数で未使用警告を出さない
        '@typescript-eslint/no-unused-vars': 'off',
      },
      // テスト環境の追加設定
      env: {
        jest: true,
      },
    },
  ],
};
