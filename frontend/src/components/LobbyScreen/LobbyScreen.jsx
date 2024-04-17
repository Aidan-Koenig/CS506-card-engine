import { useEffect, useState } from 'react';
import closeModalBtn from '../../assets/close.svg';
import notifSVG from '../../assets/notif-icon.svg';
import './LobbyScreen.css';

function LobbyScreen({ closeModal, selectedGameId }) {

	const [gameInfo, setGameInfo] = useState(null);

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
	}, [selectedGameId]); // need to add a dependency so that this refreshes the list whenever someone joins a game, probably through websockets

	const playerNames = gameInfo ? [gameInfo.player1_name] : [];

	// Loading indicator while it's waiting for the game info
	if (!gameInfo) {
		return <div>Loading...</div>;
	}

	return(
		<>
			<div className='lobby'>
				<div className='upper-bar'>
					<h2 className='menu-header'>Lobby.</h2>
					<img className='closeModalX' src={closeModalBtn} onClick={closeModal} alt='close'/>
				</div>
				<div style={{ marginLeft: '1rem' }}>
					<h4 style={{ width: '45%', display: 'inline-block'}}>Players:</h4>
					<h4 style={{ width: '45%', display: 'inline-block', textAlign: 'center' }}>Ready:</h4>
				</div>
				{playerNames.map((name) => (
					<div key={name} style={{ marginLeft: '1rem' }}>
						<span style={{ width: '45%', display: 'inline-block', fontSize: '32px', marginBottom: '1rem' }}>{name}</span>
						<input style={{ width: '45%', display: 'inline-block' }} type="checkbox" />
					</div>
				))}
				<div className="notif-box" style={{display: 'flex', justifyContent: 'space-between', marginTop: '1rem'}}>
					<div style={{border: 'dashed', width: '30%'}}>
						<img src={notifSVG} />
						Your game will start filled with bots.
					</div>
					<button>Start game &gt;</button>
				</div>
			</div>
		</>
	);
}

export default LobbyScreen;