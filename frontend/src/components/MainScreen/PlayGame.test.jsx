/*import { render, screen } from '@testing-library/react';
import PlayGame from './PlayGame';

test('renders learn react link', () => {
  render(<PlayGame />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});*/

import { render, screen } from '@testing-library/react';
import PlayGame from './PlayGame';

test('renders player CPU James', () => {
  render(<PlayGame />);
  const playerNameElement = screen.getByText(/CPU James/i);  // Looking for "CPU James"
  expect(playerNameElement).toBeInTheDocument();
});

