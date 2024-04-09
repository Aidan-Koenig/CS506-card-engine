import React from "react";

import { render, screen } from '@testing-library/react';

import SettingScreen from "./SettingScreen";



describe('SettingScreen', () => {

  it('should render Setting screen with title and screen items correctly', () => {	

	render(<SettingScreen />);

	//if text that user sees is present in screen, test will pass
	const screenTitle = screen.getByText(/Setting./i);
	expect(screenTitle).toBeInTheDocument();

    const changeusernameText = screen.getByRole('button', { name: /Change Username/i });
	expect(changeusernameText).toHaveTextContent('Change Username');

    const resetstatsText = screen.getByRole('button', { name: /Reset Stats/i });
	expect(resetstatsText).toHaveTextContent('Reset Stats');

    const deleteaccountText = screen.getByRole('button', { name: /Delete Account/i });
	expect(deleteaccountText).toHaveTextContent('Delete Account');

    const closeText = screen.getByRole('button', { name: /Close/i });
	expect(closeText).toHaveTextContent('Close');
  });


});
