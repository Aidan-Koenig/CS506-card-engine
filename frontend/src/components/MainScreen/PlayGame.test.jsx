/*import { render, screen } from '@testing-library/react';
import PlayGame from './PlayGame';

test('renders learn react link', () => {
  render(<PlayGame />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});*/


import { render, screen } from '@testing-library/react';
import PlayGame from './PlayGame';

test('renders Positions', () => {
  render(<PlayGame />);
  const playerNameElement = screen.getByText(/Top/i);
  const playerNameElement = screen.getByText(/Right/i);
  const playerNameElement = screen.getByText(/You/i);
  const playerNameElement = screen.getByText(/Left/i);// Looking for "CPU James"
  expect(playerNameElement).toBeInTheDocument();
});

