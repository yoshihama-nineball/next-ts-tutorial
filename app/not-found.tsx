import Link from 'next/link';

export default function NotFound() {
  return (
    <div>
      <h2>ページが見つかりません</h2>
      <p>お探しのリソースが見つかりませんでした</p>
      <Link href="/">トップページに戻る</Link>
    </div>
  );
}
