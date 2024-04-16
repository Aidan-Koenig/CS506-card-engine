import closeModalBtn from '../../assets/close.svg';
import { useEffect, useState } from 'react';

function SelectSeat({ closeModal, selectedGameId }) {

	const [gameInfo, setGameInfo] = useState(null);

	// Grabs the latest game info for a game with the specified selectedGameId
	useEffect(() => {
		const fetchGameInfo = async () => {
			try {
				const response = await fetch(`http://localhost:8080/games/euchre/${selectedGameId}`);
				if (!response.ok) {
					throw new Error('Failed to fetch game info');
			}
			const data = await response.json();
			setGameInfo(data);
			console.log(data);
			} catch (error) {
				console.error('Error fetching game info:', error);
			}
		};
	
		fetchGameInfo();
	}, [selectedGameId]);

	/* 
		Need to add fetch here to allow user to select their seat at the table
	*/

	// Loading indicator while it's waiting for the game info
	if (!gameInfo) {
		return <div>Loading...</div>;
	}

	return(
		<>
			<div className='lobby'>
				<div className='upper-bar'>
					<h2 className='menu-header'>Select Seat.</h2>
					<img className='closeModalX' src={closeModalBtn} onClick={closeModal} alt='close'/>
				</div>
				<h2>{gameInfo.game_name}</h2>
				<p>Game ID: {gameInfo.game_id}</p>
				<p>Player 1: {gameInfo.player1_name}</p>
				<p>Player 2: {gameInfo.player2_name}</p>
				<p>Player 3: {gameInfo.player3_name}</p>
				<p>Player 4: {gameInfo.player4_name}</p>
				<p>Game Status: {gameInfo.game_status}</p>
				<p>Winner 1: {gameInfo.winner_1}</p>
				<p>Winner 2: {gameInfo.winner_2}</p>
				<p>Creation Date: {gameInfo.creation_date}</p>
			</div>
		</>
	);
}

export default SelectSeat;