import React, { useState, useEffect } from 'react';
import './FindGame.css';
import closeModalBtn from '../../assets/close.svg';

function FindGame({ closeModal }) {

	const [openGames, setOpenGames] = useState({}); // game_name above in obj hierarchy, game_id, number_players

	// Runs on component load
	// Fetches all open games from the backend/db
	useEffect(() => {
		const fetchOpenGames = async () => {
			try {
				const response = await fetch('http://localhost:8080/games/euchre/open-games');
				if (!response.ok) {
					throw new Error('Failed to fetch open games');
				}
				const data = await response.json();
				console.log(data);
				setOpenGames(data);
			} catch (error) {
				console.error('Error fetching open games:', error);
			}
		};
	
		fetchOpenGames();
	}, []);

	// request that gets called to have a user join a game 
	// TODO: Have this fetch moved to the modal, have the modal popup when they select the game
	// using the data from the getGameInfo endpoint using the game ID in the openGames object
	// const joinGame = async (gameId, playerId, seatNumber) => {
	// 	try {
	// 		const response = await fetch(`http://localhost:8080/games/euchre/${gameId}/select-seat`, {
	// 		method: 'POST',
	// 		headers: {
	// 			'Content-Type': 'application/json',
	// 		},
	// 		body: JSON.stringify({ playerID: playerId, seatNumber }),
	// 		});
		
	// 		if (!response.ok) {
	// 		throw new Error('Failed to join game');
	// 		}
		
	// 		const data = await response.text();
	// 		console.log(data); // Log the response message
	// 		// Optionally, you can perform additional actions after joining the game
	// 	} catch (error) {
	// 		console.error('Error joining game:', error);
	// 	}
	// };

	return (
		<>
			<div className='find-game'>
				<div className='upper-bar'>
					<h2 className='menu-header'>Find Game.</h2>
					<img className='closeModalX' src={closeModalBtn} onClick={closeModal} alt='close'/>
				</div>
				<h3 style={{marginLeft: '1rem'}}>Available Games:</h3>
				<div className='available-games'>
					<div style={{textDecoration: 'underline'}}>
						<p style={{fontWeight: 'bold', width: '33%', display: 'inline-block', marginLeft: '0.5rem'}}>Name:</p>
						<p style={{fontWeight: 'bold', width: '33%', display: 'inline-block'}}>Players:</p>
						<p style={{fontWeight: 'bold', width: '33%', display: 'inline-block'}}></p>
					</div>
					{Object.entries(openGames).map(([gameName, gameData]) => (
						<div key={gameName}>
							<p style={{fontWeight: 'bold', width: '33%', display: 'inline-block', marginLeft: '0.5rem'}}>
							{gameName} : ID {gameData.game_id}
							</p>
							<p style={{fontWeight: 'bold', width: '33%', display: 'inline-block'}}>
							{gameData.number_players}/4
							</p>
							<p style={{fontWeight: 'bold', width: '33%', display: 'inline-block'}}>&gt;</p>
							{/* convert above P into a button that on click, opens the modal for select-seat and runs a fetch on the gameInfo to get the specific game information */}
						</div>
					))}
				</div>
			</div>
		</>
	);
}

export default FindGame;
