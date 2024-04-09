import React from 'react';
import { useState } from 'react';
import Modal from 'react-modal';
import accountSVG from '../../assets/account.svg'
import settingsSVG from '../../assets/settings.svg';
import FindGame from '../FindGame/FindGame';
import CreateGame from '../CreateGame/CreateGame';
import LobbyScreen from '../LobbyScreen/LobbyScreen';
import SettingScreen from '../SettingScreen/SettingScreen';


function gameMenu( {openfindGameModal, closefindGameModal, findGameModalIsOpen, openCreateGameModal, closeCreateGameModal, createGameModalIsOpen, showToast, username, reloadLogin} ) {

	const [gameCreated, setGameCreated] = useState(false);
	const [lobbyScreenModalIsOpen, setLobbyScreenModalIsOpen] = useState(false);

	const [presentUsername, setPresentUsername] = useState(username)
	const [settingScreenModalIsOpen, setSettingScreenModalIsOpen] = useState(false);


	const openLobbyScreenModal = () => {
		setLobbyScreenModalIsOpen(true);
	};
	
	const closeLobbyScreenModal = () => {
		setLobbyScreenModalIsOpen(false);
	};

	//function to close the settings screen
	const closeSettingScreenModal = (value) => {
		setPresentUsername(value);
		setSettingScreenModalIsOpen(false);
		if(value == '*GoTo-Login*')
		{
			reloadLogin("");
		}
	};

	//function to open settings screen when menu screen is reached
	const openSettingScreenModal = () => {
		setSettingScreenModalIsOpen(true);
	};

	return(
			<>
				<div style={{display: 'flex', flexDirection: 'column'}}>
					<div className='upper-bar'>
						<h2 style={{marginLeft: '1rem'}} className='menu-header'>Menu.</h2>
						<div>
							<img src={accountSVG} alt='account'/>
							<img style={{marginLeft: '1rem', marginRight: '1rem'}} src={settingsSVG} alt='settings' onClick={openSettingScreenModal}/>  
						</div>
					</div>
					<a className='menu-button' style={{marginLeft: '35rem', marginTop: '2rem'}} onClick={openfindGameModal}>
						Find Game
					</a>
					<Modal // Find Game modal popup
						isOpen={findGameModalIsOpen}
						onRequestClose={closefindGameModal}
						contentLabel="Registration Modal"
						style={{
							overlay: {
								backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
							},
							content: {
								width: '900px',
								height: '700px',
								margin: 'auto',
								borderRadius: '10px', // Add this line to round the edges
							},
						}}
					>
						<FindGame
							showToast={showToast}
							closeModal={closefindGameModal}
						/>
					</Modal>
					<p style={{textAlign: 'center'}}>-or-</p>
					<a style={{display: 'flex', justifyContent: 'flex-end', marginRight: '35rem'}} className='menu-button' onClick={openCreateGameModal}>
						Create Game
					</a>
					<Modal //create game modal popup
						isOpen={createGameModalIsOpen}
						onRequestClose={closeCreateGameModal}
						contentLabel="Registration Modal"
						style={{
							overlay: {
								backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
							},
							content: {
								width: '900px',
								height: '600px',
								margin: 'auto',
								borderRadius: '10px', // Add this line to round the edges
							},
						}}
					>
						<CreateGame
							showToast={showToast}
							closeModal={closeCreateGameModal}
							setGameCreated={() => {
								setGameCreated(true);
								openLobbyScreenModal(); // Open the lobby screen modal when game is created
							}}
							openLobbyScreenModal={openLobbyScreenModal}
						/>
					</Modal>
					<Modal
						isOpen={lobbyScreenModalIsOpen}
						onRequestClose={closeLobbyScreenModal}
						contentLabel="Lobby Screen Modal"
						style={{
							overlay: {
							backgroundColor: 'rgba(0, 0, 0, 0.5)',
							},
							content: {
							width: '900px',
							height: '700px',
							margin: 'auto',
							borderRadius: '10px',
							},
						}}
					>
						<LobbyScreen closeModal={closeLobbyScreenModal} username={username} />
					</Modal>
					<Modal
						isOpen={settingScreenModalIsOpen}
						onRequestClose={closeSettingScreenModal} // this will go back to the menu screen
						contentLabel="Setting screen Modal"
						style={{
							overlay: {
							backgroundColor: 'rgba(0, 0, 0, 0.5)',
							},
							content: {
							width: '900px',
							height: '700px',
							margin: 'auto',
							borderRadius: '10px',
							},
						}}
					>
						<SettingScreen closeModal={closeSettingScreenModal} username={presentUsername} />
					</Modal>
				</div>
			</>
	);
}

export default gameMenu;
