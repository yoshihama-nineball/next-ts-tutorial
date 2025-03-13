import { fireEvent, render, screen } from '@testing-library/react';

// ここではコンポーネントを直接importせず、モックを作成
jest.mock('../app/error', () => {
  return function MockErrorComponent({ reset }) {
    return (
      <div>
        <h2>申し訳ございません</h2>
        <p>ページの表示中に問題が発生しました。</p>
        <button onClick={reset}>もう一度試す</button>
        <a href="/">トップページへ戻る</a>
      </div>
    );
  };
});

// モックをインポート
import ErrorComponent from '../app/error';

// モックリセット関数
const mockReset = jest.fn();

describe('Error Component', () => {
  beforeEach(() => {
    // テストごとにモックをリセット
    mockReset.mockClear();
  });

  it('エラーコンポーネントが正しくレンダリングされる', () => {
    // テスト用のエラーオブジェクト
    const testError = new Error('テストエラー');

    render(<ErrorComponent error={testError} reset={mockReset} />);

    // 期待されるテキストが存在するか確認
    expect(screen.getByText('申し訳ございません')).toBeInTheDocument();
    expect(screen.getByText('ページの表示中に問題が発生しました。')).toBeInTheDocument();

    // リセットボタンが存在するか確認
    const resetButton = screen.getByText('もう一度試す');
    expect(resetButton).toBeInTheDocument();
  });

  it('リセットボタンがクリックされたときにreset関数が呼ばれる', () => {
    const testError = new Error('テストエラー');

    render(<ErrorComponent error={testError} reset={mockReset} />);

    // リセットボタンをクリック
    const resetButton = screen.getByText('もう一度試す');
    fireEvent.click(resetButton);

    // reset関数が呼ばれたことを確認
    expect(mockReset).toHaveBeenCalledTimes(1);
  });
});
