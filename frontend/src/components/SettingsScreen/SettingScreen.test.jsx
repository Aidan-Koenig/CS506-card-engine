import React from "react";
import { render, screen } from '@testing-library/react';
import SettingsScreen from "./SettingScreen";

describe('SettingsScreen', () => {
  it('should render setting screen with title and screen items correctly', () => {
	
	render(<SettingsScreen />);

	const screenTitle = screen.getByText(/Setting/i);
	expect(screenTitle).toBeInTheDocument();

    const changeUserNameText = screen.getByText(/Change Username/i);
	expect(changeUserNameText).toBeInTheDocument();

    const resetStatsText = screen.getByText(/Reset Stats/i);
	expect(resetStatsText).toBeInTheDocument();

    const deleteAccountText = screen.getByText(/Delete Account/i);
	expect(deleteAccountText).toBeInTheDocument();

  });

});