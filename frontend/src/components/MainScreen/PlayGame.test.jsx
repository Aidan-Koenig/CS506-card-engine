import { render, screen } from '@testing-library/react';
import PlayGame from './PlayGame';

test('renders learn react link', () => {
  render(<PlayGame />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
