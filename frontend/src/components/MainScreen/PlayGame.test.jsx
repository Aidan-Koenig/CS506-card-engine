/*import { render, screen } from '@testing-library/react';
import PlayGame from './PlayGame';

test('renders learn react link', () => {
  render(<PlayGame />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});*/

import { render, screen } from '@testing-library/react';
import PlayGame from './PlayGame';

describe('PlayGame Component', () => {
  beforeEach(() => {
    render(<PlayGame />);
  });

  it('renders four player components with appropriate card visibility', () => {
    // Check if the Player components are rendered with correct props
    const topPlayer = screen.getByText('Top');
    expect(topPlayer).toBeInTheDocument();
    expect(topPlayer.nextSibling.querySelectorAll('div')).toHaveLength(4);

    const leftPlayer = screen.getByText('left');
    expect(leftPlayer).toBeInTheDocument();
    expect(leftPlayer.nextSibling.querySelectorAll('div')).toHaveLength(4);

    const rightPlayer = screen.getByText('right');
    expect(rightPlayer).toBeInTheDocument();
    expect(rightPlayer.nextSibling.querySelectorAll('div')).toHaveLength(4);

    const bottomPlayer = screen.getByText('you');
    expect(bottomPlayer).toBeInTheDocument();
    const bottomPlayerCards = bottomPlayer.nextSibling.querySelectorAll('div');
    expect(bottomPlayerCards[0].textContent).toBe('ace_clubs');
    expect(bottomPlayerCards[1].textContent).toBe('nine_diamonds');
    expect(bottomPlayerCards[2].textContent).toBe('queen_hearts');
    expect(bottomPlayerCards[3].textContent).toBe('ten_spades');
  });

  it('renders the Table component with correct props', () => {
    expect(screen.getByText('Clubs')).toBeInTheDocument(); // Checks the trump is displayed
    const tableCards = screen.getByRole('table').querySelectorAll('div');
    expect(tableCards).toHaveLength(4); // Checks the correct number of cards
    expect(tableCards[0].textContent).toBe('ace_clubs');
  });

  it('renders the Scoreboard component with team scores', () => {
    expect(screen.getByText(/You & CPU James/)).toBeInTheDocument();
    expect(screen.getByText(/Scott S. & Bucky B./)).toBeInTheDocument();
  });
});

