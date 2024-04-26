/*import { render, screen } from '@testing-library/react';
import PlayGame from './PlayGame';

test('renders learn react link', () => {
  render(<PlayGame />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});*/

/*import { render, screen } from '@testing-library/react';
import PlayGame from './PlayGame';

test('renders Positions', () => {
  render(<PlayGame />);
  const playerNameElement = screen.getByText(/Top/i);
  const playerNameElement = screen.getByText(/Right/i);
  const playerNameElement = screen.getByText(/You/i);
  const playerNameElement = screen.getByText(/Left/i);
  expect(playerNameElement).toBeInTheDocument();
});*/

import { render, screen } from '@testing-library/react';
import PlayGame from './PlayGame';

test('renders Positions', () => {
  render(<PlayGame />);
  const topPlayerElement = screen.getByText(/Top/i);
  const rightPlayerElement = screen.getByText(/Right/i);
  const bottomPlayerElement = screen.getByText(/You/i);
  const leftPlayerElement = screen.getByText(/Left/i);

  expect(topPlayerElement).toBeInTheDocument();
  expect(rightPlayerElement).toBeInTheDocument();
  expect(bottomPlayerElement).toBeInTheDocument();
  expect(leftPlayerElement).toBeInTheDocument();
});


