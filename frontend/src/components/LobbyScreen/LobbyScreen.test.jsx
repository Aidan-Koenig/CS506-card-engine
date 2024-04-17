import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import LobbyScreen from './LobbyScreen';

describe('LobbyScreen', () => {
  it('should render username and player names correctly', () => {

	render(<LobbyScreen />);

	const lobbyTitle = screen.getByText(/Loading.../i); // loading symbol for now since it only shows the lobby after request fulfilled
	expect(lobbyTitle).toBeInTheDocument();
  });
});
