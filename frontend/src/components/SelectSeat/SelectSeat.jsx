import closeModalBtn from '../../assets/close.svg';
import { useEffect, useState } from 'react';

function SelectSeat({ showToast, closeModal, selectedGameId, openLobbyScreenModal, userID }) {

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

	//request that gets called to have a user join a game 
	const joinGame = async (seatNumber) => {
		try {
			const response = await fetch(`http://localhost:8080/games/euchre/${selectedGameId}/select-seat?playerID=${userID}&seatNumber=${seatNumber}`, {
			method: 'POST',
			});
		
			if (!response.ok) {
			throw new Error('Failed to join game');
			}
			else { //Successfully selected seat, close this modal and open the lobby modal
				showToast('Successfully joined game', 'success');
				closeModal();
				openLobbyScreenModal();
			}
		
			const data = await response.text();
			console.log(data); // Log the response message
			// Optionally, you can perform additional actions after joining the game
		} catch (error) {
			console.error('Error joining game:', error);
		}
	};

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
				<h2>Name: {gameInfo.game_name}, ID: {gameInfo.game_id}</h2>
				<div>
					{[1, 2, 3, 4].map((seatNumber) => (
					<div key={seatNumber}>
						{!gameInfo[`player${seatNumber}_name`] && ( // If nobody in the given seat, then display the button for that seat
						<button
							onClick={() => joinGame(seatNumber)}
						>
							Select Seat {seatNumber}
						</button>
						)}
						<p>Player {seatNumber}: {gameInfo[`player${seatNumber}_name`]}</p>
					</div>
					))}
				</div>
				<p>Creation Date: {gameInfo.creation_date}</p>
			</div>
		</>
	);
}

export default SelectSeat;