'use client';

import Link from 'next/link';
import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // オプション: エラーロギングサービスにエラーを報告
    console.error(error);
  }, [error]);

  return (
    <div className="error-container">
      <h2>申し訳ございません</h2>
      <p>ページの表示中に問題が発生しました。</p>
      <div className="actions">
        <button onClick={reset}>再試行する</button>
        <Link href="/">トップページへ戻る</Link>
      </div>
      <p className="support-info">
        問題が解決しない場合は、<a href="/contact">サポート</a>までお問い合わせください。
      </p>
      {process.env.NODE_ENV === 'development' && (
        <div className="error-details">
          <p>エラー詳細: {error.message}</p>
        </div>
      )}
    </div>
  );
}
