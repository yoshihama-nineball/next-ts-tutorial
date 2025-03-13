
export default function Forbidden() {
  return (
    <div>
      <h1>アクセス権限がありません</h1>
      <p>この管理ページにアクセスするためには管理者権限が必要です。</p>
      <a href="/">トップページに戻る</a>
    </div>
  );
}
