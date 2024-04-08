import React from "react";
import { render, screen } from '@testing-library/react';
import ChangeNameScreen from "./ChangeNameScreen";
//import { MemoryRouter } from "react-router-dom";

describe('ChangeNameScreen', () => {
  it('should render ChangeNameScreen with title and screen items correctly', () => {
	
	render(<MemoryRouter><ChangeNameScreen /></MemoryRouter>);

	const screenTitle = screen.getByText(/Change Username/i);
	expect(screenTitle).toBeInTheDocument();

    const currentText = screen.getByText(/Current:/i);
	expect(currentText).toBeInTheDocument();

    const newText = screen.getByText(/New:/i);
	expect(newText).toBeInTheDocument();

    const buttonText = screen.getByRole('button', { name: /Change/i });
	expect(buttonText).toHaveTextContent('Change');

    const backtosettingText = screen.getByText(/Back to Setting/i);
	expect(backtosettingText).toBeInTheDocument();

  });

});
