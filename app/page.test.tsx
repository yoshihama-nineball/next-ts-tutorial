import { render, screen } from '@testing-library/react';
import Page from './page';

it('App Router: Works with Server Components', () => {
  render(<Page />);
  // 実際のテキスト内容に合わせて期待値を変更
  expect(screen.getByRole('heading')).toHaveTextContent('Hello, Next.js!');
});
